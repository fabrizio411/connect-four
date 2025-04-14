import { createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import { Mode } from "../types";

import Score from "../components/Score";
import Board from "../components/Board";
import Header from "../components/Header";
import TurnCounter from "../components/TurnCounter";

const Game = () => {
  const params = useParams();

  // === GAME STATES ===
  const [turn, setTurn] = createSignal<0 | 1>(0);
  const [paused, setPaused] = createSignal<boolean>(false);

  const togglePause = () => setPaused((prev) => !prev);

  const handlePlay = () => {
    setTurn((prev) => prev === 0 ? 1 : 0);
  };

  return (
    <div class="h-full flex flex-col items-center px-6 lg:px-0 lg:gap-0 lg:justify-between">
      <Header togglePause={togglePause} />

      <div class="flex items-center w-full lg:h-auto lg:w-auto max-w-[632px] lg:max-w-none flex-col lg:flex-row gap-20 relative pb-36">
        <Score mode={params.id as Mode}>
          <Board turn={turn()} handlePlay={handlePlay} class="hidden lg:flex" />
        </Score>

        <Board turn={turn()} handlePlay={handlePlay} class="lg:hidden" />

        <TurnCounter paused={paused()} turn={turn()} handlePlay={handlePlay} />

        <div class="bg-muted-background h-52 rounded-t-[5rem] fixed lg:absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-[1200px]">
        </div>
      </div>
    </div>
  );
};

export default Game;
