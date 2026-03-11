import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Scroll-driven frame sequence renderer.
 * Draws frames on a <canvas> element based on scroll position via GSAP ScrollTrigger-style manual tracking.
 *
 * @param folder  - public path prefix like "/VIDEOFRAMES1"
 * @param count   - total number of frames (1-indexed, zero-padded 3 digits)
 * @param scrollStart - scroll Y where animation should begin  (px)
 * @param scrollEnd   - scroll Y where animation should end    (px)
 */
export function useFrameSequence(
  folder: string,
  count: number,
  scrollStart: number,
  scrollEnd: number,
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let cancelled = false;
    const imgs: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= count; i++) {
      const img = new Image();
      const num = String(i).padStart(3, '0');
      img.src = `${folder}/ezgif-frame-${num}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (!cancelled && loadedCount === count) {
          imagesRef.current = imgs;
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (!cancelled && loadedCount === count) {
          imagesRef.current = imgs;
          setLoaded(true);
        }
      };
      imgs.push(img);
    }

    return () => { cancelled = true; };
  }, [folder, count]);

  // Draw frame on scroll
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !imagesRef.current.length) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, w, h);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(1, Math.max(0, (scrollY - scrollStart) / (scrollEnd - scrollStart)));
      const frameIndex = Math.min(count - 1, Math.floor(progress * (count - 1)));

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    };

    // Draw first frame immediately
    drawFrame(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loaded, scrollStart, scrollEnd, count, drawFrame]);

  return { canvasRef, loaded };
}
