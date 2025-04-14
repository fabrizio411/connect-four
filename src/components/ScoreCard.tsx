import { Component } from "solid-js";
import { twMerge } from "tailwind-merge";
import ShadowCard from "./ShadowCard";
import Player1 from "../assets/player-one.svg";
import Player2 from "../assets/player-two.svg";
import You from "../assets/you.svg";
import Cpu from "../assets/cpu.svg";
import { Mode } from "../types";

interface Props {
  numPlayer: 0 | 1 | 2;
  mode: Mode;
}

const ScoreCard: Component<Props> = ({
  numPlayer,
  mode,
}) => {
  return (
    <ShadowCard
      shadowClass="rounded-2xl flex-1"
      class="relative rounded-2xl bg-white px-0 lg:px-8 py-4 lg:pb-6 lg:pt-10"
    >
      <h3 class="font-bold text-lg text-center text-nowrap">
        {mode === "vs"
          ? <span>PLAYER {numPlayer}</span>
          : <span>{numPlayer === 0 ? "CPU" : "YOU"}</span>}
      </h3>
      <p class="lg:mt-2 font-bold text-4xl lg:text-6xl text-center">12</p>

      <div
        class={twMerge(
          "absolute top-1/2 lg:top-0 lg:left-1/2 -translate-1/2",
          numPlayer === 1
            ? "left-0"
            : "right-0 lg:right-auto translate-x-1/2 lg:-translate-x-1/2",
        )}
      >
        {numPlayer === 1
          ? (
            <img
              class="size-12 sm:size-auto"
              src={mode === "cpu" ? You : Player1}
              alt="Player 1 Icon"
            />
          )
          : (
            <img
              class="size-12 sm:size-auto"
              src={mode === "cpu" ? Cpu : Player2}
              alt="Player 2 Icon"
            />
          )}
      </div>
    </ShadowCard>
  );
};

export default ScoreCard;
