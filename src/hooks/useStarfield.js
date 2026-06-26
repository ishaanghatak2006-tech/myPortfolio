import { useEffect, useRef } from 'react';

export function useStarfield(canvasRef) {
  const animFrameRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width, height;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener('resize', resize);

    const NUM_STARS = 150;
    const layers = [
      { count: 0.5, speed: 0.05, maxOffset: 16, opacityRange: [0.15, 0.35], size: 1 },
      { count: 0.3, speed: 0.12, maxOffset: 10, opacityRange: [0.2, 0.45], size: 1 },
      { count: 0.2, speed: 0.25, maxOffset: 4, opacityRange: [0.3, 0.6], size: 2 },
    ];

    function initStars() {
      const stars = [];
      for (let i = 0; i < NUM_STARS; i++) {
        let layerIdx = 0;
        const rand = Math.random();
        if (rand < 0.2) layerIdx = 2;
        else if (rand < 0.5) layerIdx = 1;
        const layer = layers[layerIdx];
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          layer,
          opacity: layer.opacityRange[0] + Math.random() * (layer.opacityRange[1] - layer.opacityRange[0]),
          size: layer.size,
        });
      }
      starsRef.current = stars;
    }
    initStars();

    function handleMouseMove(e) {
      mouseRef.current.x = (e.clientX / width - 0.5) * 2;
      mouseRef.current.y = (e.clientY / height - 0.5) * 2;
    }
    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      for (const star of starsRef.current) {
        let x = star.x;
        let y = star.y;

        if (!prefersReducedMotion) {
          const parallaxX = mouse.x * star.layer.maxOffset;
          const parallaxY = mouse.y * star.layer.maxOffset;
          x += parallaxX;
          y += parallaxY;

          star.y += star.layer.speed;
          if (star.y > height) {
            star.y = -2;
            star.x = Math.random() * width;
          }
        }

        ctx.globalAlpha = star.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(Math.round(x), Math.round(y), star.size, star.size);
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(animate);
    }

    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [canvasRef]);
}