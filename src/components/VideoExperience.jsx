import { useEffect, useRef, useState } from 'react';
import { Play } from '@phosphor-icons/react';
import { Arrow } from './Arrow';

const MEDIA = '/media/dyc-experience/';

export default function VideoExperience({ onReserve }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!started) return;
    const video = videoRef.current;
    let cancelled = false;
    let hls;
    let usingFallback = false;
    const play = () => { if (!cancelled) video.play().catch(() => { if (!cancelled) setBuffering(false); }); };
    const fallback = () => {
      if (cancelled || usingFallback) return;
      usingFallback = true;
      hls?.destroy();
      video.src = `${MEDIA}experience.mp4`;
      play();
    };
    setBuffering(true);
    async function connect() {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = `${MEDIA}master.m3u8`;
        play();
        return;
      }
      try {
        const { default: Hls } = await import('hls.js/dist/hls.light.mjs');
        if (cancelled) return;
        if (!Hls.isSupported()) return fallback();
        hls = new Hls({ capLevelToPlayerSize: true, maxBufferLength: 20, maxMaxBufferLength: 30 });
        hls.on(Hls.Events.MANIFEST_PARSED, play);
        hls.on(Hls.Events.ERROR, (_, data) => { if (data.fatal) fallback(); });
        hls.loadSource(`${MEDIA}master.m3u8`);
        hls.attachMedia(video);
      } catch { fallback(); }
    }
    const handleError = () => {
      if (!usingFallback) fallback();
      else { setFailed(true); setBuffering(false); }
    };
    video.addEventListener('error', handleError);
    connect();
    return () => {
      cancelled = true;
      video.removeEventListener('error', handleError);
      hls?.destroy();
      video.pause();
      video.removeAttribute('src');
      video.load();
    };
  }, [started]);

  return <>
    <div className="experience-screen">
      <video ref={videoRef} className="experience-video" controls={started} playsInline
        preload="none" poster={`${MEDIA}poster.jpg`} aria-label="Témoignages des participants à l’académie DYC"
        onWaiting={() => setBuffering(true)} onPlaying={() => setBuffering(false)}
        onCanPlay={() => setBuffering(false)} onPause={() => setBuffering(false)} />
      {!started && <button className="experience-play" onClick={() => setStarted(true)} aria-label="Lire les témoignages DYC">
        <span><Play size={30} weight="fill" aria-hidden="true" /></span>
        Lire la vidéo <small>2 min 33</small>
      </button>}
      {buffering && !failed && <p className="experience-status" role="status">Chargement de la vidéo…</p>}
      {failed && <div className="experience-error" role="alert"><p>La vidéo n’a pas pu démarrer.</p>
        <button className="pill" onClick={() => { setFailed(false); setStarted(false); }}>Réessayer</button>
      </div>}
    </div>
    <div className="experience-story">
      <p className="eyebrow">LES VOIX DE L’ACADÉMIE</p>
      <h2 id="experience-title">Des instants à créer.<br /><em>Des émotions à partager.</em></h2>
      <p>Ils ont poussé la porte de DYC, mis la main à la pâte et laissé parler leur créativité. Découvrez leur expérience, avec leurs mots.</p>
      <span className="experience-signature" aria-hidden="true">Le plaisir d’apprendre ensemble.</span>
      <button className="pill home-cta" onClick={onReserve}>Vivre l’expérience DYC <Arrow /></button>
    </div>
  </>;
}
