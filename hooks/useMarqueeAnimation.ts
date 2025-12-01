'use client';

import { useCallback } from 'react';

/**
 * Custom hook for setting up marquee animation on text that overflows its container.
 * Returns a ref callback that can be attached to the container element.
 * The container should have a span child containing the text to animate.
 */
export function useMarqueeAnimation() {
  const setupMarquee = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    const textSpan = element.querySelector('span');
    if (!textSpan) return;

    // Reset animation first
    (textSpan as HTMLElement).style.animation = 'none';

    // Check if text overflows container
    const containerWidth = element.offsetWidth;
    const textWidth = textSpan.scrollWidth;
    const overflow = textWidth - containerWidth;

    if (overflow > 0) {
      // Text overflows - set up carousel animation
      // Add 10px buffer so user can clearly see end of text
      const scrollDistance = overflow + 10;
      // Consistent slow speed: 10px per second
      const duration = Math.max(4, scrollDistance / 10);
      (textSpan as HTMLElement).style.setProperty('--scroll-distance', `-${scrollDistance}px`);
      (textSpan as HTMLElement).style.animation = `marquee ${duration}s ease-in-out infinite`;
    } else {
      // Text fits - no animation needed
      (textSpan as HTMLElement).style.animation = 'none';
    }
  }, []);

  return setupMarquee;
}
