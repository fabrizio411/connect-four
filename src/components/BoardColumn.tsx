import { Component, For, Show } from "solid-js";
import MarkerRed from "../assets/marker-red.svg";
import MarkerYellow from "../assets/marker-yellow.svg";
import ChipRed from "../assets/counter-red-large.svg";
import ChipYellow from "../assets/counter-yellow-large.svg";
import FallingPiece from "./FallingPiece";

interface Props {
  column: Array<0 | 1>;
  index: number;
  handlePlay: (index: number, e: Event) => void;
  turn: 0 | 1;
  fallingPiece: { column: number; player: 0 | 1 } | null;
}

const BoardColumn: Component<Props> = (props) => {
  const chipImage = (player: 0 | 1) => (player === 0 ? ChipRed : ChipYellow);
  const markerImage = (
    player: 0 | 1,
  ) => (player === 0 ? MarkerRed : MarkerYellow);

  return (
    <div
      onclick={[props.handlePlay, props.index]}
      class="group z-50 h-full relative flex-1 cursor-pointer"
    >
      <div class="w-full h-[84%] absolute top-10">
        {/* == FICHAS FIJAS == */}
        <For each={props.column}>
          {(item, index) => (
            <div
              class="absolute w-[80%] z-30 sm:w-full left-1/9 transition-transform"
              style={{
                top: `${3 + (5 - index()) * (100 / 6 + 1)}%`,
              }}
            >
              <img src={chipImage(item)} alt="chip" />
            </div>
          )}
        </For>

        {/* == FICHA EN CAÍDA == */}
        <FallingPiece
          index={props.index}
          column={props.column}
          chipImage={chipImage}
          fallingPiece={props.fallingPiece}
        />
      </div>

      {/* == MARCADOR DE HOVER == */}
      <img
        class="select-none absolute top-0 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all"
        src={markerImage(props.turn)}
        alt="marker"
      />
    </div>
  );
};

export default BoardColumn;
