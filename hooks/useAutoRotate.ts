'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for auto-rotating through items (like a promo banner carousel).
 * @param itemCount - Total number of items to rotate through
 * @param intervalMs - Rotation interval in milliseconds (default: 5000)
 * @returns [currentIndex, setCurrentIndex] - Current index and setter
 */
export function useAutoRotate(itemCount: number, intervalMs: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (itemCount <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [itemCount, intervalMs]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index % itemCount);
  }, [itemCount]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  return { currentIndex, goToIndex, goNext, goPrev };
}
