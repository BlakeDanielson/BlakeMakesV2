export interface LocalMusicTrack {
  id: string;
  title: string;
  filename: string;
  filepath: string;
  blobUrl?: string; // Vercel Blob URL
  duration?: string;
  genre?: string;
  key?: string;
  bpm?: string;
  year?: string;
  fileSize?: string;
  isUntagged?: boolean;
}

// Parse filename to extract metadata
function parseFilename(filename: string): Partial<LocalMusicTrack> {
  const metadata: Partial<LocalMusicTrack> = {};
  
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.(mp3|wav)$/i, '');
  
  // Check if untagged
  metadata.isUntagged = nameWithoutExt.includes('UNTAGGED');
  
  // Extract BPM (standalone numbers, typically 2-3 digits)
  const bpmMatch = nameWithoutExt.match(/\b(\d{2,3})\b/);
  if (bpmMatch) {
    metadata.bpm = bpmMatch[1];
  }
  
  // Extract key (musical keys that are standalone words)
  const keyMatch = nameWithoutExt.match(/\b([A-G](?:#|b)?(?:maj|min|major|minor)?)\b/i);
  if (keyMatch) {
    metadata.key = keyMatch[0];
  }
  
  // Extract title (everything before BPM or key, cleaned up)
  let title = nameWithoutExt;
  
  // Remove @BLVKE prefix if present
  title = title.replace(/^@BLVKE\s+/, '');
  
  // Remove BPM (only if it's a standalone number)
  if (bpmMatch) {
    title = title.replace(new RegExp(`\\b${bpmMatch[1]}\\b`), '');
  }
  
  // Remove key (only if it's a standalone musical key)
  if (keyMatch) {
    title = title.replace(new RegExp(`\\b${keyMatch[0]}\\b`, 'i'), '');
  }
  
  // Remove UNTAGGED
  title = title.replace(/\s*-?\s*UNTAGGED\s*$/i, '');
  
  // Clean up extra spaces and dashes
  title = title.replace(/\s*-\s*$/, '').replace(/\s+/g, ' ').trim();
  
  metadata.title = title || filename;
  
  return metadata;
}

// Load blob URLs mapping
function loadBlobUrls(): Record<string, string> {
  try {
    // Use dynamic import to avoid build-time resolution issues
    const fs = require('fs');
    const path = require('path');
    const blobPath = path.join(process.cwd(), 'lib', 'blob-urls.json');
    
    if (fs.existsSync(blobPath)) {
      const blobData = JSON.parse(fs.readFileSync(blobPath, 'utf8'));
      const urlMap: Record<string, string> = {};
      blobData.files?.forEach((file: any) => {
        urlMap[file.filename] = file.url;
      });
      return urlMap;
    }
    return {};
  } catch (error) {
    console.log('No blob URLs found, using local files');
    return {};
  }
}

// Get all music tracks from the blvke-beats folder
export function getMusicTracks(): LocalMusicTrack[] {
  const musicFiles = [
    'Hold me Close Amin 85 0 UNTAGGED.wav',
    'Sleeping in on vacation 115 Dmin - UNTAGGED.wav',
    'Illuminatis On Me 142 Dmin.mp3',
    'Next Level Now What 180 Dmin.mp3',
    '@BLVKE 5G Tower 151 D#maj - UNTAGGED.mp3',
    'She wont wait 140 Amin - UNTAGGED.mp3',
    'Overstimulated 153 Dmin.mp3',
    'Dark Vacation 140 Dmin - UNTAGGED.mp3',
    '5.7.25 Twan Recording new verse BLVKE UNMIXEDmp3.mp3',
    'Lil Groovy 96 Emin - UNTAGGED.wav',
    'Sunbathing with you 100 Emin.wav',
    'Comfortable Today 90 C#maj.wav'
  ];

  const blobUrls = loadBlobUrls();

  return musicFiles.map((filename, index) => {
    const metadata = parseFilename(filename);
    const id = `track-${index + 1}`;
    const blobUrl = blobUrls[filename];
    
    return {
      id,
      filename,
      filepath: blobUrl || `/blvke-beats/${encodeURIComponent(filename)}`,
      blobUrl,
      title: metadata.title || filename,
      bpm: metadata.bpm,
      key: metadata.key,
      isUntagged: metadata.isUntagged,
      genre: determineGenre(filename),
      year: '2024',
      ...metadata
    };
  });
}

function determineGenre(filename: string): string {
  const lower = filename.toLowerCase();
  
  if (lower.includes('drill')) return 'Drill';
  if (lower.includes('groovy') || lower.includes('groove')) return 'Hip-Hop';
  if (lower.includes('vacation') || lower.includes('sunbathing') || lower.includes('comfortable')) return 'Chill';
  if (lower.includes('illuminati') || lower.includes('5g tower')) return 'Trap';
  if (lower.includes('overstimulated')) return 'Electronic';
  if (lower.includes('dark')) return 'Dark Trap';
  
  // Default based on BPM if available
  const bpmMatch = filename.match(/(\d{2,3})/);
  if (bpmMatch) {
    const bpm = parseInt(bpmMatch[1]);
    if (bpm >= 140) return 'Trap';
    if (bpm >= 120) return 'Hip-Hop';
    if (bpm < 100) return 'Chill';
  }
  
  return 'Hip-Hop';
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
} 