import { useMemo } from 'react';
import { useFrameSequence, type FrameSequenceSegment } from '../../hooks/useFrameSequence';
import { VIDEO1_FRAME_COUNT, VIDEO2_FRAME_COUNT } from '../../data/siteData';

/**
 * Single seamless scroll-driven frame sequence overlay.
 * VIDEOFRAMES1 (0-9 sec) flows directly into videoframes2 (9-15 sec)
 * as one continuous animation on a single canvas.
 * After frames end, the canvas fades out revealing a stunning aurora background.
 */
export default function FrameSequenceOverlay() {
  const segments: FrameSequenceSegment[] = useMemo(() => [
    { folder: '/VIDEOFRAMES1', count: VIDEO1_FRAME_COUNT },
    { folder: '/videoframes2', count: VIDEO2_FRAME_COUNT },
  ], []);

  const { canvasRef, loaded, progress } = useFrameSequence(
    segments,
    0,       // scroll begins at top
    4500,    // total scroll distance for both sequences
  );

  // Fade out frame canvas once sequence ends (progress 0.92 → 1.0)
  const frameFadeOut = progress > 0.92 ? 1 - ((progress - 0.92) / 0.08) : 1;
  const canvasOpacity = loaded ? Math.max(0, frameFadeOut) : 0;

  // Reveal aurora background as frames fade out
  const bgOpacity = progress > 0.85 ? Math.min(1, (progress - 0.85) / 0.15) : 0;

  return (
    <>
      {/* ── Stunning animated aurora/gradient background ─────────── */}
      <div
        className="fixed inset-0 z-[0] pointer-events-none aurora-bg"
        style={{ opacity: bgOpacity, transition: 'opacity 0.3s ease' }}
      >
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
        <div className="aurora-orb aurora-orb-4" />
        <div className="aurora-mesh" />
      </div>

      {/* ── Frame sequence canvas ────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="frame-sequence-canvas"
        style={{ opacity: canvasOpacity, transition: 'opacity 0.15s ease' }}
      />

      {/* Dark overlay so text is always readable */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-navy-900/40" />
    </>
  );
}
