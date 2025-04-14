import { Component } from "solid-js";
import MarkerRed from "../assets/marker-red.svg";
import MarkerYellow from "../assets/marker-yellow.svg";

interface Props {
  handlePlay: () => void;
}

const BoardColumn: Component<Props> = (props) => {
  return (
    <div
      onclick={props.handlePlay}
      class="group h-full relative flex-1 cursor-pointer"
    >
      <img
        class="absolute top-0 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all"
        src={MarkerRed}
        alt="marker-red"
      />
      <img
        class="absolute top-0 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all"
        src={MarkerYellow}
        alt="marker-yellow"
      />
    </div>
  );
};

export default BoardColumn;
