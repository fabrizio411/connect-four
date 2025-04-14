import { Component, JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {}

const SmallButton: Component<Props> = (props) => {
  const [local, attrs] = splitProps(props, ["class"]);

  return (
    <button
      class={twMerge(
        "text-white bg-muted-background hover:bg-accent-1 active:bg-accent-1/80 rounded-4xl cursor-pointer py-2 px-4",
        local.class,
      )}
      {...attrs}
    >
      {props.children}
    </button>
  );
};

export default SmallButton;
