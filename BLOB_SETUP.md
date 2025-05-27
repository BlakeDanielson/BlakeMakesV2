# Vercel Blob Setup Guide

This guide will help you migrate your audio files from local storage to Vercel Blob for better performance and deployment.

## Step 1: Get Your Vercel Blob Token

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to the **Storage** tab
3. Create a new **Blob** store (or use an existing one)
4. Copy the `BLOB_READ_WRITE_TOKEN`

## Step 2: Set Up Environment Variables

1. Copy the token from `env.txt`
2. Create a `.env.local` file in your project root
3. Add the token:
   ```
   BLOB_READ_WRITE_TOKEN=your_actual_token_here
   ```

## Step 3: Upload Your Audio Files

Run the upload script:
```bash
npm run upload-audio
```

This will:
- Upload all audio files from `public/blvke-beats/` to Vercel Blob
- Create a `lib/blob-urls.json` file with URL mappings
- Your music player will automatically use Blob URLs when available

## Step 4: Clean Up Local Files (Optional)

After successful upload, you can:
1. Remove large audio files from `public/blvke-beats/`
2. Keep only the smaller files or thumbnails
3. Commit the changes to reduce repository size

## Benefits

✅ **Faster deployments** - No large files in git  
✅ **Better performance** - CDN-delivered audio  
✅ **Cleaner repository** - Only code, no large assets  
✅ **Automatic fallback** - Falls back to local files if Blob URLs unavailable  

## Files Created/Modified

- `scripts/upload-to-blob.js` - Upload script
- `lib/blob-urls.json` - URL mappings (auto-generated)
- `lib/music-utils.ts` - Updated to support Blob URLs
- `package.json` - Added upload script

## Troubleshooting

**Upload fails?**
- Check your `BLOB_READ_WRITE_TOKEN` is correct
- Ensure you have internet connection
- Verify Vercel Blob store is active

**Music not playing?**
- Check browser console for errors
- Verify `blob-urls.json` was created
- Ensure Blob URLs are accessible (should be public) 