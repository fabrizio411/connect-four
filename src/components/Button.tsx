import { Component, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  shadowClass?: string;
  variant?: "primary" | "secondary" | "white";
  icon?: any;
}

const Button: Component<Props> = ({
  shadowClass,
  variant = "primary",
  icon = null,
  children,
  class: className,
  ...attrs
}) => {
  return (
    <div
      class={twMerge(
        "group relative rounded-2xl top-2 left-0 bg-black hover:bg-muted-background",
        shadowClass,
      )}
    >
      <button
        class={twMerge(
          "relative w-full bottom-2 active:bottom-0 transition-[bottom] left-0 flex items-center justify-start font-bold text-xl border-[3px] border-black group-hover:border-muted-background rounded-2xl py-5 px-5 cursor-pointer",
          variant === "primary" && "bg-accent-1 text-white fill-white",
          variant === "secondary" && "bg-accent-2 fill-black",
          variant === "white" && "bg-white fill-black",
          className,
        )}
        {...attrs}
      >
        <span>{children}</span>
        {icon !== null && (
          <img
            class="absolute top-1/2 -translate-y-1/2 right-3"
            src={icon}
            alt="icon"
          />
        )}
      </button>
    </div>
  );
};

export default Button;
