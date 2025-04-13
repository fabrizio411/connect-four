import { Component, createSignal } from "solid-js";
import ShadowCard from "./ShadowCard";
import Button from "./Button";
import { A } from "@solidjs/router";
import SmallButton from "./SmallButton";
import { twMerge } from "tailwind-merge";

interface Props {
  restart: () => void;
}

const Restart: Component<Props> = ({ restart }) => {
  const [open, setOpen] = createSignal<boolean>(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <SmallButton onclick={toggleOpen}>RESTART</SmallButton>

      <div
        class={twMerge(
          "z-20 fixed top-0 left-0 w-full h-full place-items-center",
          open() ? "grid" : "hidden",
        )}
      >
        <ShadowCard
          shadowClass="z-20 w-[95%] max-w-[480px]"
          class="flex gap-4 flex-col"
        >
          <h2 class="my-10 font-bold text-6xl text-center text-white">
            PAUSE
          </h2>
          <Button variant="white" class="justify-center" onclick={toggleOpen}>
            CONTINUE GAME
          </Button>
          <Button
            variant="white"
            class="justify-center"
            onclick={() => {
              restart();
              toggleOpen();
            }}
          >
            RESTART
          </Button>
          <A href="/">
            <Button class="justify-center">QUIT GAME</Button>
          </A>
        </ShadowCard>

        <div
          onclick={toggleOpen}
          class="z-10 bg-black/40 absolute h-full w-full"
        >
        </div>
      </div>
    </>
  );
};

export default Restart;
