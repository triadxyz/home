/* eslint-disable @next/next/no-img-element */
export const Footer: React.FC = () => {
  return (
    <div className="flex absolute bottom-0 w-full flex-col">
      <hr className="border-white/10 w-full" />

      <div className="flex items-center justify-between px-4 w-full max-w-[1330px] mx-auto h-[70px]">
        <span className="text-sm text-white/30 ">TRIAD © 2024</span>

        <span className="text-sm text-white/30 flex items-center gap-x-2">
          Powered by{" "}
          <a href="">
            <img
              className="w-16 h-12"
              src="/img/powered-fire.svg"
              alt="logo-pyth"
            />
          </a>
        </span>
      </div>
    </div>
  );
};
