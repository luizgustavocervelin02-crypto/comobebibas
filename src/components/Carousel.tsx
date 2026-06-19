import { useRef, useState } from 'react';

interface InfiniteCarouselProps {
  children: React.ReactNode[];
  /** 'story' = 9:16 portrait  |  'square' = 1:1  |  'testimonial' = 828:1696 portrait */
  aspect?: 'story' | 'square' | 'testimonial';
  /** Width of each card in px. Defaults: story → 180, square → 220 */
  itemWidth?: number;
  /** Gap between cards in px */
  gap?: number;
}

export default function InfiniteCarousel({
  children,
  aspect = 'story',
  itemWidth,
  gap = 16,
}: InfiniteCarouselProps) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const defaultWidth = aspect === 'square' ? 220 : (aspect === 'testimonial' ? 200 : 180);
  const w = itemWidth ?? defaultWidth;

  // Duplicate items for seamless infinite loop
  const items = [...children, ...children];

  // Duration: roughly how long to scroll through the original set once
  const totalPx = children.length * (w + gap);
  const speed = 60; // px per second
  const duration = totalPx / speed;

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{
          gap: `${gap}px`,
          animation: `scroll-rtl ${duration}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {items.map((child, i) => (
          <div
            key={i}
            style={{
              width: `${w}px`,
              flexShrink: 0,
              aspectRatio: aspect === 'square' ? '1 / 1' : (aspect === 'testimonial' ? '828 / 1696' : '9 / 16'),
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
