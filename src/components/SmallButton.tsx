import { Component, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {}

const SmallButton: Component<Props> = ({
  class: className,
  children,
  ...attrs
}) => {
  return (
    <button
      class={twMerge(
        "text-white bg-muted-background hover:bg-accent-1 active:bg-accent-1/80 rounded-4xl cursor-pointer py-2 px-4",
        className,
      )}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default SmallButton;
