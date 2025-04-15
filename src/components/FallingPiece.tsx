import { Component, Show } from "solid-js";

interface Props {
  fallingPiece: { column: number; player: 0 | 1 } | null;
  column: Array<0 | 1>;
  index: number;
  chipImage: (player: 0 | 1) => any;
}

const FallingPiece: Component<Props> = (props) => {
  return (
    <Show when={props.fallingPiece}>
      {(falling) =>
        falling().column === props.index && (
          <img
            src={props.chipImage(falling().player)}
            alt="falling chip"
            class="select-none absolute z-30 left-1/2 -translate-x-1/2 animate-drop"
            style={{
              top: `-${100 / 7}px`,
              left: `50%`,
              "--final-top": `${
                3 + (5 - props.column.length) * (100 / 6 + 1)
              }%`,
              "animation-duration": `${500 - 50 * props.column.length}ms`,
            }}
          />
        )}
    </Show>
  );
};

export default FallingPiece;
