import { children, Component, JSX, splitProps } from "solid-js";
import ScoreCard from "./ScoreCard";
import { Mode } from "../types";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  mode: Mode;
}

const Score: Component<Props> = (props) => {
  const safeChildren = children(() => props.children);
  const [local, attrs] = splitProps(props, ["mode"]);

  return (
    <div
      class="flex items-center gap-8 lg:gap-20 lg:mx-auto w-[95%]"
      {...attrs}
    >
      <ScoreCard mode={local.mode} numPlayer={1} />
      {safeChildren()}
      <ScoreCard mode={local.mode} numPlayer={2} />
    </div>
  );
};

export default Score;
