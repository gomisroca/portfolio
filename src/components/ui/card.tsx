import { twMerge } from "tailwind-merge";

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="group relative my-2 flex h-full w-full flex-col items-center justify-start gap-2 overflow-hidden transition-transform duration-200 ease-in-out hover:z-30 hover:scale-110 hover:shadow-md active:scale-90 active:duration-100 xl:active:scale-100">
      <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-emerald-400 to-lime-400 opacity-0 transition duration-200 ease-in-out group-hover:opacity-100 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"></div>
      <div
        className={twMerge(
          "relative z-20 m-[2px] flex h-full w-full flex-col items-center justify-start gap-2 bg-zinc-50 shadow-md group-hover:z-40 dark:bg-zinc-950 dark:shadow-white/10",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-emerald-400 to-lime-400 opacity-0 transition duration-200 ease-in-out group-hover:opacity-100 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500"></div>
    </div>
  );
}

export default Card;
