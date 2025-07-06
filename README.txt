# Wedding Stream (with hls.js for Chrome/Firefox)

## Setup

1. Download FFmpeg static from:
   https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz

2. Extract and copy `ffmpeg` to:
   ffmpeg-bin/ffmpeg

3. Start FFmpeg HLS server:
   chmod +x start-ffmpeg.sh
   ./start-ffmpeg.sh

4. Serve the website:
   cd site
   npx live-server --port=8080

Then open http://localhost:8080

OBS:
- Server: rtmp://localhost:1809/live
- Stream key: wedding