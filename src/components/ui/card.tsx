import { twMerge } from "tailwind-merge";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="group relative my-2 flex h-full w-full flex-col items-center justify-start gap-2 overflow-hidden shadow-black/30 transition-transform duration-100 ease-out hover:z-30 hover:scale-110 hover:shadow-md active:scale-90 active:duration-100 xl:active:scale-100 dark:shadow-black">
      <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-zinc-300 via-blue-300/70 to-zinc-300 opacity-0 transition duration-100 ease-out group-hover:opacity-100 dark:from-zinc-700 dark:via-blue-400/50 dark:to-zinc-700"></div>
      <div
        className={twMerge(
          "relative z-20 m-[2px] flex h-full w-full flex-col items-center justify-start gap-2 bg-zinc-50 shadow-md group-hover:z-40 dark:bg-zinc-950 dark:shadow-white/10",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-zinc-300 via-blue-300/70 to-zinc-300 opacity-0 transition duration-200 ease-in-out group-hover:opacity-100 dark:from-zinc-700 dark:via-blue-400/50 dark:to-zinc-700"></div>
    </div>
  );
}

export default Card;
