import React from "react";

interface BlursProps {
  primaryColor: string;
  secondaryColor: string;
}

export const RadialGradients: React.FC<BlursProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <div className="w-[100vw] flex absolute min-h-[600px] justify-between">
      <div
        style={{
          background: `radial-gradient(32.27% 32.27% at 44.35% 54.57%, ${primaryColor} 100%, #13141A 100%)`,
        }}
        className=" top-[150px]  size-[600px] rounded-full left-0 lg:top-[400px] lg:size-[1200px]"
      />
      <div
        style={{
          background: `radial-gradient(32.27% 32.27% at 44.35% 54.57%, ${secondaryColor} 10%, #13141A 100%)`,
        }}
        className="absolute -top-[150px] size-[600px] rounded-full right-0 lg:top-[400px] lg:size-[1200px]"
      />
    </div>
  );
};
