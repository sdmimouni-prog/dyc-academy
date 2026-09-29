import { useEffect, useRef, useState } from 'react';

function resetPointerMotion(hero) {
  hero.style.setProperty('--hero-pan-x', '0px');
  hero.style.setProperty('--hero-pan-y', '0px');
  hero.style.setProperty('--hero-hover-scale', '1');
  hero.style.setProperty('--hero-glow-opacity', '0');
}

export function useHeroMotion() {
  const heroRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let pointerActive = false;
    let position = { x: .75, y: .5 };
    let inView = true;

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (pointerActive) resetPointerMotion(hero);
      pointerActive = false;
    };

    const move = (event) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === 'touch' ||
          hero.dataset.motionPaused === 'true' || event.target.closest('a, button, nav')) {
        reset();
        return;
      }
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      if (x < .52 || y < 0 || y > 1) {
        reset();
        return;
      }
      position = { x, y };
      pointerActive = true;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        hero.style.setProperty('--hero-pan-x', `${(.75 - position.x) * 28}px`);
        hero.style.setProperty('--hero-pan-y', `${(.5 - position.y) * 14}px`);
        hero.style.setProperty('--hero-hover-scale', '1.025');
        hero.style.setProperty('--hero-glow-x', `${(position.x - .75) * 24}%`);
        hero.style.setProperty('--hero-glow-y', `${(position.y - .5) * 24}%`);
        hero.style.setProperty('--hero-glow-opacity', '1');
      });
    };

    const syncVisibility = () => {
      hero.dataset.motionVisible = String(inView && !document.hidden);
      if (!inView || document.hidden) reset();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncVisibility();
    });
    observer.observe(hero);
    syncVisibility();
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', reset);
    document.addEventListener('visibilitychange', syncVisibility);
    reducedMotion.addEventListener('change', reset);
    finePointer.addEventListener('change', reset);

    return () => {
      observer.disconnect();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', reset);
      document.removeEventListener('visibilitychange', syncVisibility);
      reducedMotion.removeEventListener('change', reset);
      finePointer.removeEventListener('change', reset);
      cancelAnimationFrame(frame);
      resetPointerMotion(hero);
    };
  }, []);

  useEffect(() => {
    if (paused && heroRef.current) resetPointerMotion(heroRef.current);
  }, [paused]);

  return { heroRef, paused, toggle: () => setPaused(value => !value) };
}
