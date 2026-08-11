"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type Slide = {
  src: string;
  alt: string;
};

export default function Slideshow({
  slides,
  intervalMs = 5000,
}: {
  slides: Slide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-forest-100 bg-forest-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(max-width: 768px) 100vw, 1152px"
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev / next controls */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-forest-900/50 p-2 text-cream-50 transition hover:bg-forest-900/80"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-forest-900/50 p-2 text-cream-50 transition hover:bg-forest-900/80"
          >
            →
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-gold-400" : "bg-cream-50/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
