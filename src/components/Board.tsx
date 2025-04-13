import { Component, JSX } from "solid-js";
import BoardBackLarge from "../assets/board-layer-black-large.svg";
import BoardFrontLarge from "../assets/board-layer-white-large.svg";
import BoardBackSmall from "../assets/board-layer-black-small.svg";
import BoardFrontSmall from "../assets/board-layer-white-small.svg";
import { twMerge } from "tailwind-merge";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const Board: Component<Props> = ({ class: className }) => {
  return (
    <div class={twMerge("relative w-full sm:w-auto", className)}>
      <img class="hidden sm:block" src={BoardBackLarge} alt="Logo" />
      <img
        class="hidden sm:block absolute top-0"
        src={BoardFrontLarge}
        alt="Logo"
      />

      <img class="sm:hidden w-full" src={BoardBackLarge} alt="Logo" />
      <img
        class="sm:hidden w-full absolute top-0"
        src={BoardFrontSmall}
        alt="Logo"
      />
    </div>
  );
};

export default Board;
