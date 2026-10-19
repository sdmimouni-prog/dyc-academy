"""Create on-demand HLS renditions and a fast-start MP4 from the approved web source.
Usage: python3 scripts/prepare-experience-video.py /path/to/web.mp4 [public/media/output-folder]
Requires ffmpeg and ffprobe. The original stays outside the repository.
"""
import json
from pathlib import Path
import subprocess
import sys

source = Path(sys.argv[1]).resolve(strict=True)
root = Path(__file__).resolve().parent.parent / (sys.argv[2] if len(sys.argv) > 2 else 'public/media/dyc-experience')
root.mkdir(parents=True, exist_ok=True)
probe = json.loads(subprocess.check_output(['ffprobe', '-v', 'error', '-show_streams', '-show_format', '-of', 'json', str(source)]))
video = next(s for s in probe['streams'] if s['codec_type'] == 'video')
width, height = video['width'], video['height']
variants = [(720, 1800, 24), (480, 900, 25), (360, 500, 26)]
master = ['#EXTM3U', '#EXT-X-VERSION:3', '#EXT-X-INDEPENDENT-SEGMENTS']
for target_width, rate, crf in variants:
    folder = root / str(target_width)
    folder.mkdir(exist_ok=True)
    mp4 = root / ('experience.mp4' if target_width == 720 else f'temp-{target_width}.mp4')
    subprocess.run(['ffmpeg', '-y', '-hide_banner', '-loglevel', 'error', '-i', str(source),
        '-map', '0:v:0', '-map', '0:a:0?', '-vf', f'scale={target_width}:-2',
        '-c:v', 'libx264', '-preset', 'fast', '-threads', '4', '-crf', str(crf),
        '-maxrate', f'{rate}k', '-bufsize', f'{rate*2}k', '-pix_fmt', 'yuv420p',
        '-r', '30', '-g', '120', '-keyint_min', '120', '-sc_threshold', '0',
        '-c:a', 'aac', '-b:a', '96k', '-ac', '2', '-movflags', '+faststart', str(mp4)], check=True)
    subprocess.run(['ffmpeg', '-y', '-hide_banner', '-loglevel', 'error', '-i', str(mp4),
        '-c', 'copy', '-hls_time', '4', '-hls_list_size', '0', '-hls_playlist_type', 'vod',
        '-hls_flags', 'independent_segments', '-hls_segment_filename', str(folder / 'part-%03d.ts'),
        str(folder / 'index.m3u8')], check=True)
    target_height = round(height * target_width / width / 2) * 2
    master += [f'#EXT-X-STREAM-INF:BANDWIDTH={(rate+96)*1100},RESOLUTION={target_width}x{target_height}', f'{target_width}/index.m3u8']
    if target_width != 720:
        mp4.unlink()
    print(f'Prepared {target_width}x{target_height}', flush=True)
(root / 'master.m3u8').write_text('\n'.join(master) + '\n')
subprocess.run(['ffmpeg', '-y', '-hide_banner', '-loglevel', 'error', '-ss', '8', '-i', str(source),
    '-frames:v', '1', '-vf', 'scale=540:-2', '-update', '1', str(root/'poster.jpg')], check=True)
print('Media ready:', root, flush=True)
