import { useState, useEffect, useCallback, useRef } from 'react';

const SOUND_KEY = 'ishaanos-sound';

export function useSound() {
  const [enabled, setEnabled] = useState(() => {
    try {
      return localStorage.getItem(SOUND_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const howlerLoaded = useRef(false);
  const sounds = useRef({});

  useEffect(() => {
    let mounted = true;
    if (enabled && !howlerLoaded.current) {
      import('howler').then(({ Howl }) => {
        if (!mounted) return;
        sounds.current = {
          tick: new Howl({ src: ['/sounds/tick.mp3'], volume: 0.15, preload: true }),
          click: new Howl({ src: ['/sounds/click.mp3'], volume: 0.2, preload: true }),
          whoosh: new Howl({ src: ['/sounds/whoosh.mp3'], volume: 0.2, preload: true }),
        };
        howlerLoaded.current = true;
      });
    }
    return () => { mounted = false; };
  }, [enabled]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(SOUND_KEY, String(next));
      } catch {}
      return next;
    });
  }, []);

  const play = useCallback(
    (name) => {
      if (!enabled) return;
      const sound = sounds.current[name];
      if (sound) {
        try { sound.play(); } catch {}
      }
    },
    [enabled]
  );

  return { enabled, toggle, play };
}