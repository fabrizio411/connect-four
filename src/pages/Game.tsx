import { A, useParams } from "@solidjs/router";
import SmallButton from "../components/SmallButton";

import Logo from "../assets/logo.svg";
import TurnRed from "../assets/turn-background-red.svg";
import TurnYellow from "../assets/turn-background-yellow.svg";
import Restart from "../components/Restart";
import Score from "../components/Score";
import Board from "../components/Board";

const Game = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div class="h-full flex flex-col items-center px-6 lg:px-0 lg:gap-0 lg:justify-between">
      <header class="flex justify-between my-8 w-full max-w-[632px] items-center">
        <A href="/">
          <SmallButton>MENU</SmallButton>
        </A>
        <img src={Logo} alt="Logo" class="size-14" />
        <Restart restart={() => {}} />
      </header>

      <div class="flex items-center w-full lg:h-auto lg:w-auto max-w-[632px] lg:max-w-none flex-col lg:flex-row gap-20 relative pb-36">
        <Score>
          <Board class="hidden lg:flex" />
        </Score>

        <Board class="lg:hidden" />

        <div class="absolute left-1/2 -translate-x-1/2 bottom-7">
          <div class="absolute top-1/2 left-1/2 -translate-1/2 text-center">
            <p class="font-medium">YOUR TURN</p>
            <h2 class="text-6xl font-bold">
              <span>12</span>s
            </h2>
          </div>

          <img src={TurnRed} alt="red turn" />
        </div>
        <div class="bg-muted-background h-52 rounded-t-[5rem] fixed lg:absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-[1200px]">
        </div>
      </div>
    </div>
  );
};

export default Game;
