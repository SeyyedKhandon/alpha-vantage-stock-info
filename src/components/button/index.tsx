import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  direction?: "ltr" | "rtl";
  onClick?: React.MouseEventHandler;
};

export const Button: React.FC<Props> = ({
  className = "",
  children,
  direction = "ltr",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative z-0 flex cursor-pointer items-center gap-6 overflow-hidden rounded-md py-2 text-primary transition-all duration-500 hover:px-4 hover:text-light hover:shadow-lg dark:text-primaryDark dark:hover:text-dark sm:hover:px-2 ${className}`}
    >
      {children}
      <span
        className={`absolute -z-10 h-full w-0 bg-primary transition-all duration-500 group-hover:w-full dark:bg-primaryDark ${
          direction === "ltr" ? "left-0 " : "right-0"
        }`}
      />
    </button>
  );
};
