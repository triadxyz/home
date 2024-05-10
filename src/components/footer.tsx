/* eslint-disable @next/next/no-img-element */
export const Footer: React.FC = () => {
  return (
    <div className="flex absolute bottom-0 w-full flex-col">
      <hr className="border-white/10 w-full" />

      <div className="flex items-center justify-between px-4 w-full mx-auto h-[70px]">
        <span className="text-sm text-white/30 ">TRIAD © 2024</span>

        <span className="text-sm text-white/30 flex items-center gap-x-2">
          Powered by{" "}
          <a href="https://twitter.com/triadfi">
            <span className="text-sm font-semibold gradient-text">
              Triad Labs
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};
