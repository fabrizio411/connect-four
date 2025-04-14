import { Component, createSignal } from "solid-js";
import ShadowCard from "./ShadowCard";
import Button from "./Button";
import { A } from "@solidjs/router";
import SmallButton from "./SmallButton";
import { twMerge } from "tailwind-merge";

interface Props {
  restart: () => void;
  togglePause: () => void;
}

const Restart: Component<Props> = (props) => {
  const [open, setOpen] = createSignal<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    props.togglePause();
  };

  return (
    <>
      <SmallButton onclick={toggleOpen}>RESTART</SmallButton>

      <div
        class={twMerge(
          "z-50 w-[95%] max-w-[480px] fixed top-1/2 left-1/2 -translate-1/2 grid place-items-center transition-transform",
          open() ? "scale-100" : "scale-0",
        )}
      >
        <ShadowCard
          shadowClass="z-20 w-full"
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
              props.restart();
              toggleOpen();
            }}
          >
            RESTART
          </Button>
          <A href="/">
            <Button class="justify-center">QUIT GAME</Button>
          </A>
        </ShadowCard>
      </div>
      <div
        onclick={toggleOpen}
        class={twMerge(
          "z-10 bg-black/40 fixed top-0 left-0 h-full w-full",
          open() ? "block" : "hidden",
        )}
      >
      </div>
    </>
  );
};

export default Restart;
