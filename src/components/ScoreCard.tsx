import { Component } from "solid-js";
import Player1 from "../assets/player-one.svg";
import Player2 from "../assets/player-two.svg";
import ShadowCard from "./ShadowCard";

interface Props {
  numPlayer: 1 | 2;
}

const ScoreCard: Component<Props> = ({
  numPlayer,
}) => {
  return (
    <ShadowCard
      shadowClass="rounded-2xl"
      class="relative rounded-2xl bg-white px-8 pb-6 pt-10"
    >
      <h3 class="font-bold text-lg text-center">PLAYER {numPlayer}</h3>
      <p class="mt-2 font-bold text-6xl text-center">12</p>

      <div class="absolute top-0 left-1/2 -translate-1/2">
        {numPlayer === 1
          ? <img src={Player1} alt="Player 1 Icon" />
          : <img src={Player2} alt="Player 2 Icon" />}
      </div>
    </ShadowCard>
  );
};

export default ScoreCard;
