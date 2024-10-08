'use client'

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: string;
  size: string;
  animationDuration: string;
  animationDelay: string;
}

const getRandomPosition = (max: number) => Math.random() * max;

const generateBubbles = (count: number): Bubble[] => {
  const bubbles: Bubble[] = [];
  for (let i = 0; i < count; i += 1) {
    const size = Math.random() * 20 + 10;
    bubbles.push({
      id: i,
      left: `${getRandomPosition(100)}%`,
      size: `${size}px`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
    });
  }
  return bubbles;
};

export const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(generateBubbles(25));
  }, []);

  return (
    <div className="bubbles">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export function BannerBubbles() {
  return (
    <div className="absolute z-0 w-[100vw] bottom-1/2 mx-auto">
      <Bubbles />
    </div>
  );
}
