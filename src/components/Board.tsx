import { Component, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

import MarkerRed from "../assets/marker-red.svg";
import MarkerYellow from "../assets/marker-yellow.svg";
import BoardBackLarge from "../assets/board-layer-black-large.svg";
import BoardFrontLarge from "../assets/board-layer-white-large.svg";
import BoardFrontSmall from "../assets/board-layer-white-small.svg";
import BoardColumn from "./BoardColumn";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {}

const Board: Component<Props> = ({ class: className }) => {
  return (
    <div class={twMerge("relative w-full sm:w-auto", className)}>
      <div class="absolute z-20 w-full h-full bottom-10 left-0 flex px-2">
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </div>

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
