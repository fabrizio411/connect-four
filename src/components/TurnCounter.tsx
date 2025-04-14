import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import TurnRed from "../assets/turn-background-red.svg";
import TurnYellow from "../assets/turn-background-yellow.svg";

interface Props {
  handlePlay: () => void;
  turn: 0 | 1;
  paused: boolean;
}

const TurnCounter: Component<Props> = (props) => {
  const [time, setTime] = createSignal<number>(30);
  let interval: number;

  const startCountdown = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setTime((prev) => {
        if (props.paused) return prev;
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        props.handlePlay(); // Cambiar turno
        return 30;
      });
    }, 1000);
  };

  // Iniciar cuando se monta
  onMount(() => {
    startCountdown();
  });

  // Reiniciar cada vez que cambia el turno
  createEffect(() => {
    props.turn; // Dependencia reactiva
    setTime(30);
    startCountdown();
  });

  onCleanup(() => clearInterval(interval));

  return (
    <div class="absolute left-1/2 -translate-x-1/2 bottom-7">
      <div class="absolute top-1/2 left-1/2 -translate-1/2 text-center">
        <p class="font-medium">YOUR TURN</p>
        <h2 class="text-6xl font-bold">
          <span>{time()}</span>s
        </h2>
      </div>

      <Show
        when={props.turn === 0}
        fallback={<img src={TurnYellow} alt="red turn" />}
      >
        <img src={TurnRed} alt="red turn" />
      </Show>
    </div>
  );
};

export default TurnCounter;
