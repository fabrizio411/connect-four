import { Component, Index, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

import BoardBackLarge from "../assets/board-layer-black-large.svg";
import BoardFrontLarge from "../assets/board-layer-white-large.svg";
import BoardFrontSmall from "../assets/board-layer-white-small.svg";
import BoardColumn from "./BoardColumn";

interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
  fallingPiece: { column: number; player: 0 | 1 } | null;
  pieces: (0 | 1)[][];
  handlePlay: (inedx: number, e: Event) => void;
  turn: 0 | 1;
}

const Board: Component<Props> = (props) => {
  return (
    <div class={twMerge("relative w-full sm:w-auto", props.class)}>
      <div class="absolute z-20 w-full h-full bottom-10 left-0 flex px-1 sm:px-2">
        <Index each={Array(7).fill(0)}>
          {(_, index) => (
            <BoardColumn
              fallingPiece={props.fallingPiece}
              column={props.pieces[index]}
              turn={props.turn}
              index={index}
              handlePlay={props.handlePlay}
            />
          )}
        </Index>
      </div>

      <img
        class="pointer-events-none relative hidden sm:block z-40"
        src={BoardBackLarge}
        alt="Logo"
      />
      <img
        class="pointer-events-none hidden sm:block absolute top-0 z-40"
        src={BoardFrontLarge}
        alt="Logo"
      />

      <img
        class="pointer-events-none relative sm:hidden w-full z-40"
        src={BoardBackLarge}
        alt="Logo"
      />
      <img
        class="pointer-events-none sm:hidden w-full absolute top-0 z-40"
        src={BoardFrontSmall}
        alt="Logo"
      />
    </div>
  );
};

export default Board;
