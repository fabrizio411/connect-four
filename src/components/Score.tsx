import { Component, JSX } from "solid-js";
import ScoreCard from "./ScoreCard";
import { Mode } from "../types";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  mode: Mode;
  score1: number;
  score2: number;
}

const Score: Component<Props> = (props) => {
  return (
    <div class="flex items-center gap-8 lg:gap-20 lg:mx-auto w-[95%]">
      <ScoreCard mode={props.mode} numPlayer={1} score={props.score1} />
      {props.children}
      <ScoreCard mode={props.mode} numPlayer={2} score={props.score2} />
    </div>
  );
};

export default Score;
