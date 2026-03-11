import { useFrameSequence } from '../../hooks/useFrameSequence';
import { VIDEO1_FRAME_COUNT, VIDEO2_FRAME_COUNT } from '../../data/siteData';

/**
 * Two scroll-driven frame sequences that play as the user scrolls.
 * VIDEOFRAMES1 plays across the first section range, VIDEOFRAMES2 across the second.
 */
export default function FrameSequenceOverlay() {
  const { canvasRef: canvas1, loaded: loaded1 } = useFrameSequence(
    '/VIDEOFRAMES1',
    VIDEO1_FRAME_COUNT,
    0,          // hero start
    2500,       // ends after ~2500px of scroll
  );

  const { canvasRef: canvas2, loaded: loaded2 } = useFrameSequence(
    '/VIDEOFRAMES2',
    VIDEO2_FRAME_COUNT,
    2500,       // starts where video1 ends
    5000,       // ends at ~5000px
  );

  return (
    <>
      <canvas
        ref={canvas1}
        className="frame-sequence-canvas"
        style={{ opacity: loaded1 ? 1 : 0, transition: 'opacity 0.5s' }}
      />
      <canvas
        ref={canvas2}
        className="frame-sequence-canvas"
        style={{ opacity: loaded2 ? 1 : 0, transition: 'opacity 0.5s' }}
      />
      {/* Dark overlay so text is always readable over the frames */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-navy-900/50" />
    </>
  );
}
