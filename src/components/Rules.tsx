import { Component, createSignal } from "solid-js";
import Button from "./Button";
import ShadowCard from "./ShadowCard";
import IconCheck from "../assets/icon-check.svg";
import { twMerge } from "tailwind-merge";

const Rules: Component = () => {
  const [open, setOpen] = createSignal<boolean>(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <Button onclick={toggleOpen} variant="white" class="justify-start">
        GAME RULES
      </Button>

      <div
        class={twMerge(
          "fixed top-0 left-0 w-full h-full place-items-center",
          open() ? "grid" : "hidden",
        )}
      >
        <ShadowCard shadowClass="z-20 w-full max-w-[480px]" class="bg-white">
          <h1 class="text-4xl font-bold text-center mt-4 mb-10">RULES</h1>
          <div>
            <h2 class="text-muted-background font-bold text-xl mb-4">
              OBJECTIVE
            </h2>
            <p class="text-black/80">
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </div>
          <div class="mt-10 mb-6">
            <h2 class="text-muted-background font-bold text-xl mb-4">
              HOW TO PLAY
            </h2>
            <p class="flex gap-3 items-start mt-1">
              <span class="font-bold">1</span>
              <span class="text-black/80">
                Red goes first in the first game.
              </span>
            </p>
            <p class="flex gap-3 items-start mt-1">
              <span class="font-bold">2</span>
              <span class="text-black/80">
                Players must aleternate turns, and only one disc can be dropped
                in each turn.
              </span>
            </p>
            <p class="flex gap-3 items-start mt-1">
              <span class="font-bold">3</span>
              <span class="text-black/80">
                The game ends when there is a 4-in-a-row or a stalemate.
              </span>
            </p>
            <p class="flex gap-3 items-start mt-1">
              <span class="font-bold">4</span>
              <span class="text-black/80">
                The starte of the previous game goes second on the next game.
              </span>
            </p>
          </div>

          <button
            onclick={toggleOpen}
            class="hover:text-background cursor-pointer absolute bottom-0 active:-bottom-1 transition-[bottom] left-1/2 translate-y-1/2 -translate-x-1/2"
          >
            <img src={IconCheck} alt="Check Icon" />
          </button>
        </ShadowCard>
        <div
          onclick={toggleOpen}
          class="z-10 bg-black/20 absolute h-full w-full"
        >
        </div>
      </div>
    </>
  );
};

export default Rules;
