import { useEffect, useRef, useState } from "react";

type OdometerProps = {
  /** Final value to animate to */
  value: number;
  /** Start value (default 0) */
  from?: number;
  /** Duration in ms (default 1500ms) */
  duration?: number;
  /** Tailwind / CSS classes */
  className?: string;
  /** Only animate once on first view (default true) */
  animateOnce?: boolean;
  /** How visible before trigger (0–1, default 0.2) */
  threshold?: number;
};

export default function Odometer({
  value,
  from = 0,
  duration = 1500,
  className,
  animateOnce = true,
  threshold = 0.2,
}: OdometerProps) {
  const [displayValue, setDisplayValue] = useState<number>(from);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const finalValue = Number(value);
    const startValue = Number(from);

    if (Number.isNaN(finalValue) || Number.isNaN(startValue)) {
      // If something weird comes through, just bail to 0 instead of NaN/-0 hell
      setDisplayValue(0);
      return;
    }

    const startAnimation = () => {
      if (animateOnce && hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const change = finalValue - startValue;

      const tick = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = startValue + change * eased;

        let rounded = Math.round(current);
        // avoid displaying -0
        if (Object.is(rounded, -0)) rounded = 0;

        setDisplayValue(rounded);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    // No IntersectionObserver? Just animate immediately.
    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          startAnimation();
          if (animateOnce) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, from, duration, animateOnce, threshold]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
    </span>
  );
}
