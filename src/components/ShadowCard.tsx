import { children, Component, JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  shadowClass?: string;
}

const ShadowCard: Component<Props> = (props) => {
  const safeChildren = children(() => props.children);

  const [local, attrs] = splitProps(props, [
    "shadowClass",
    "class",
  ]);

  return (
    <div
      class={twMerge(
        "relative rounded-4xl top-2 left-0 bg-black",
        local.shadowClass,
      )}
    >
      <div
        class={twMerge(
          "relative bottom-2 left-0 bg-background border-[3px] border-black rounded-4xl p-8",
          local.class,
        )}
        {...attrs}
      >
        {safeChildren()}
      </div>
    </div>
  );
};

export default ShadowCard;
