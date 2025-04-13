import { Component, JSX } from "solid-js";
import ScoreCard from "./ScoreCard";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const Score: Component<Props> = ({
  children,
  ...attrs
}) => {
  return (
    <div
      class="flex items-center gap-8 lg:gap-20 lg:mx-auto w-[95%]"
      {...attrs}
    >
      <ScoreCard numPlayer={1} />
      {children}
      <ScoreCard numPlayer={2} />
    </div>
  );
};

export default Score;
