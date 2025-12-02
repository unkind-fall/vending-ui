'use client';

import { useEffect, useRef, useState } from 'react';

interface MarqueeTextProps {
    text: string;
    className?: string;
    speed?: number; // Duration in seconds
}

export function MarqueeText({ text, className = '', speed = 10 }: MarqueeTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const textWidth = textRef.current.offsetWidth;
                const isOver = textWidth > containerWidth;

                setIsOverflowing(isOver);

                if (isOver && containerRef.current) {
                    // Calculate distance to scroll: (text width - container width) + 10px buffer
                    const distance = textWidth - containerWidth + 10;
                    containerRef.current.style.setProperty('--scroll-distance', `${distance}px`);
                }
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [text]);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden whitespace-nowrap ${className}`}
        >
            <div
                className={`flex ${isOverflowing ? 'animate-shuttle' : ''}`}
                style={isOverflowing ? { '--marquee-duration': `${speed}s`, width: 'max-content' } as React.CSSProperties : {}}
            >
                <span ref={textRef} className="whitespace-nowrap">
                    {text}
                </span>
            </div>
        </div>
    );
}
