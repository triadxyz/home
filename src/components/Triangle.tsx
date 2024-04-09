/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

export const Triangle: React.FC<{
  id: string;
  animationDuration: number;
  type: number;
  left: string;
  top: string;
}> = ({ id, animationDuration, type, left, top }) => {
  let triangleSrc;
  switch (type) {
    case 1:
      triangleSrc = "/img/icon-triangle.svg";
      break;
    case 2:
      triangleSrc = "/img/icon-triangle-2.svg";
      break;
    case 3:
      triangleSrc = "/img/icon-triangle-3.svg";
      break;
    default:
      triangleSrc = "/img/icon-triangle.svg";
  }

  // Convert the top prop to a number
  const initialTop = Math.random() * 100;

  // Create a ref to keep track of the current top value
  const currentTop = useRef(initialTop);

  // Create a ref to keep track of the animation frame
  // Request the next animation frame
  const animationFrame = useRef<number | null>(null);

  // Function to update the position of the triangle
  const animate = () => {
    // Update the current top value
    currentTop.current -= 0.01;

    // Update the position of the triangle
    const triangle = document.getElementById(id);
    if (triangle) {
      triangle.style.top = `${currentTop.current}%`;
    }

    animationFrame.current = requestAnimationFrame(animate);
  };

  // Start the animation when the component mounts
  useEffect(() => {
    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      // Cancel the animation when the component unmounts
      cancelAnimationFrame(animationFrame.current as number);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <img
      id={id}
      className="triangle w-4 absolute"
      style={{ animationDuration: `${animationDuration}s`, left }}
      src={triangleSrc}
      alt=""
    />
  );
};
