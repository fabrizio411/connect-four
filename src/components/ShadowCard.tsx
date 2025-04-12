import { Component, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  shadowClass?: string;
}

const ShadowCard: Component<Props> = ({
  shadowClass,
  children,
  class: className,
  ...attrs
}) => {
  return (
    <div
      class={twMerge("relative rounded-4xl top-2 left-0 bg-black", shadowClass)}
    >
      <div
        class={twMerge(
          "relative bottom-2 left-0 bg-background border-[3px] border-black rounded-4xl p-8",
          className,
        )}
        {...attrs}
      >
        {children}
      </div>
    </div>
  );
};

export default ShadowCard;
