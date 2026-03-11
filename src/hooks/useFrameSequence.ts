import { useEffect, useRef, useState, useCallback } from 'react';

export interface FrameSequenceSegment {
  folder: string;   // e.g. "/VIDEOFRAMES1"
  count: number;     // total frames in this segment (1-indexed, zero-padded 3 digits)
}

/**
 * Unified scroll-driven frame sequence renderer.
 * Chains multiple frame-sequence folders into one seamless canvas animation.
 *
 * All segments are played back-to-back on a SINGLE canvas as the user scrolls
 * from `scrollStart` to `scrollEnd`. Uses progressive loading — frames render
 * as soon as they're available, no need to wait for all images.
 */
export function useFrameSequence(
  segments: FrameSequenceSegment[],
  scrollStart: number,
  scrollEnd: number,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  /** Flat array of all images across every segment, in playback order */
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadedCountRef = useRef(0);

  const totalFrames = segments.reduce((acc, s) => acc + s.count, 0);

  // ── Preload every image across all segments (progressive) ────────────
  useEffect(() => {
    let cancelled = false;
    const allSlots: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    let globalIdx = 0;
    loadedCountRef.current = 0;

    for (const seg of segments) {
      for (let i = 1; i <= seg.count; i++) {
        const idx = globalIdx;
        const img = new Image();
        const num = String(i).padStart(3, '0');
        img.src = `${seg.folder}/ezgif-frame-${num}.jpg`;

        img.onload = () => {
          if (cancelled) return;
          allSlots[idx] = img;
          imagesRef.current = allSlots;
          loadedCountRef.current++;
          // Mark loaded after first batch so canvas appears quickly
          if (loadedCountRef.current >= Math.min(10, totalFrames)) {
            setLoaded(true);
          }
        };
        img.onerror = () => {
          if (cancelled) return;
          loadedCountRef.current++;
          if (loadedCountRef.current >= Math.min(10, totalFrames)) {
            setLoaded(true);
          }
        };

        globalIdx++;
      }
    }

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segments.map(s => s.folder + s.count).join(',')]);

  // ── Draw a single frame (contain-fit, capped upscale) ────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || !images.length) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find closest available frame if current one hasn't loaded yet
    let img = images[index];
    if (!img || !img.complete || !img.naturalWidth) {
      // Search backwards for nearest loaded frame
      for (let j = index - 1; j >= 0; j--) {
        const candidate = images[j];
        if (candidate && candidate.complete && candidate.naturalWidth) {
          img = candidate;
          break;
        }
      }
      if (!img || !img.complete || !img.naturalWidth) return;
    }

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;
    canvas.style.width = cw + 'px';
    canvas.style.height = ch + 'px';

    // Cover-fit: stretch to fill entire viewport, crop overflow (like object-fit:cover)
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (cw - w) / 2;
    const y = (ch - h) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, x, y, w, h);
  }, []);

  // ── Scroll handler (rAF-throttled) ───────────────────────────────────
  useEffect(() => {
    if (!loaded) return;

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const p = Math.min(1, Math.max(0, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
        setProgress(p);
        const frameIndex = Math.min(totalFrames - 1, Math.floor(p * (totalFrames - 1)));

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    // Draw first frame immediately
    drawFrame(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, scrollStart, scrollEnd, totalFrames, drawFrame]);

  return { canvasRef, loaded, totalFrames, progress };
}
