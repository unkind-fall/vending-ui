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
                setIsOverflowing(textRef.current.offsetWidth > containerRef.current.offsetWidth);
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
                className={`inline-block ${isOverflowing ? 'animate-marquee' : ''}`}
                style={isOverflowing ? { '--marquee-duration': `${speed}s` } as React.CSSProperties : {}}
            >
                <span ref={textRef} className="inline-block">
                    {text}
                </span>
                {isOverflowing && (
                    <span className="inline-block pl-4">
                        {text}
                    </span>
                )}
            </div>
        </div>
    );
}
