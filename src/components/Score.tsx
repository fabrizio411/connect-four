import { Component, JSX } from "solid-js";
import ScoreCard from "./ScoreCard";
import { Mode } from "../types";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  mode: Mode;
}

const Score: Component<Props> = ({
  mode,
  children,
  ...attrs
}) => {
  return (
    <div
      class="flex items-center gap-8 lg:gap-20 lg:mx-auto w-[95%]"
      {...attrs}
    >
      <ScoreCard mode={mode} numPlayer={1} />
      {children}
      <ScoreCard mode={mode} numPlayer={2} />
    </div>
  );
};

export default Score;
