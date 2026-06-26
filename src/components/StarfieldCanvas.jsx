import { useRef, memo } from 'react';
import { useStarfield } from '../hooks/useStarfield';

const StarfieldCanvas = memo(function StarfieldCanvas() {
  const canvasRef = useRef(null);
  useStarfield(canvasRef);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        role="presentation"
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </>
  );
});

export default StarfieldCanvas;