import { Component } from "solid-js";
import Player1 from "../assets/player-one.svg";
import Player2 from "../assets/player-two.svg";
import ShadowCard from "./ShadowCard";
import { twMerge } from "tailwind-merge";

interface Props {
  numPlayer: 1 | 2;
}

const ScoreCard: Component<Props> = ({
  numPlayer,
}) => {
  return (
    <ShadowCard
      shadowClass="rounded-2xl flex-1"
      class="relative rounded-2xl bg-white px-0 lg:px-8 py-4 lg:pb-6 lg:pt-10"
    >
      <h3 class="font-bold text-lg text-center text-nowrap">
        PLAYER {numPlayer}
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
              src={Player1}
              alt="Player 1 Icon"
            />
          )
          : (
            <img
              class="size-12 sm:size-auto"
              src={Player2}
              alt="Player 2 Icon"
            />
          )}
      </div>
    </ShadowCard>
  );
};

export default ScoreCard;
