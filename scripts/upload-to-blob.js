require('dotenv').config({ path: '.env.local' });
const { put } = require('@vercel/blob');
const fs = require('fs');
const path = require('path');

async function uploadAudioFiles() {
  const audioDir = path.join(__dirname, '../public/blvke-beats');
  const files = fs.readdirSync(audioDir);
  
  const audioFiles = files.filter(file => 
    file.endsWith('.mp3') || file.endsWith('.wav')
  );

  console.log(`Found ${audioFiles.length} audio files to upload...`);

  const uploadedFiles = [];

  for (const file of audioFiles) {
    try {
      console.log(`Uploading ${file}...`);
      
      const filePath = path.join(audioDir, file);
      const fileBuffer = fs.readFileSync(filePath);
      
      const blob = await put(file, fileBuffer, {
        access: 'public',
        contentType: file.endsWith('.mp3') ? 'audio/mpeg' : 'audio/wav'
      });

      uploadedFiles.push({
        filename: file,
        url: blob.url,
        size: fileBuffer.length
      });

      console.log(`✅ Uploaded: ${file} -> ${blob.url}`);
    } catch (error) {
      console.error(`❌ Failed to upload ${file}:`, error.message);
    }
  }

  // Save the mapping to a JSON file
  const mapping = {
    uploadedAt: new Date().toISOString(),
    files: uploadedFiles
  };

  fs.writeFileSync(
    path.join(__dirname, '../lib/blob-urls.json'),
    JSON.stringify(mapping, null, 2)
  );

  console.log(`\n✅ Upload complete! ${uploadedFiles.length} files uploaded.`);
  console.log('📄 URL mapping saved to lib/blob-urls.json');
  
  return uploadedFiles;
}

if (require.main === module) {
  uploadAudioFiles().catch(console.error);
}

module.exports = { uploadAudioFiles }; 