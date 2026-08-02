import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  value: string | number;
  duration?: number; // duration in ms
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  value,
  duration = 2000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  // Parse numeric part and non-numeric prefix/suffix
  const strVal = String(value);
  const match = strVal.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);

  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/,/g, '') : strVal;
  const suffix = match ? match[3] : '';
  const targetNum = parseFloat(numStr) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.15, // Trigger when 15% visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      setDisplayValue(`${prefix}0${suffix}`);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentNum = Math.floor(easedProgress * targetNum);

      setDisplayValue(`${prefix}${currentNum.toLocaleString()}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(`${prefix}${targetNum.toLocaleString()}${suffix}`);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasAnimated, targetNum, prefix, suffix, duration]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
};

export default CountUp;
