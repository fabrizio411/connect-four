import { createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import { Mode } from "../types";

import Score from "../components/Score";
import Board from "../components/Board";
import Header from "../components/Header";
import TurnCounter from "../components/TurnCounter";

const Game = () => {
  const params = useParams();
  const mode = params.id as Mode;

  const maxColLength = 6;

  // === GAME STATES ===
  const [turn, setTurn] = createSignal<0 | 1>(0);
  const [paused, setPaused] = createSignal<boolean>(false);
  const [score1, setScore1] = createSignal<number>(0);
  const [score2, setScore2] = createSignal<number>(0);
  const [fallingPiece, setFallingPiece] = createSignal<
    { column: number; player: 0 | 1 } | null
  >(null);
  const [pieces, setPieces] = createSignal<Array<Array<0 | 1>>>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  // === STATE HANDLERS ===
  const togglePause = () => setPaused((prev) => !prev);

  // === GAME LOGIC ===
  const handlePlay = (index: number, _: Event) => {
    placePiece(index);
  };

  const placePiece = (index: number) => {
    const currentColumn = pieces()[index];
    // Prevenir doble clic
    if (currentColumn.length >= maxColLength || fallingPiece()) return;

    const currentPlayer = turn();
    setFallingPiece({ column: index, player: currentPlayer });

    // Esperar por la animacion
    setTimeout(() => {
      setPieces((prev) => {
        const newPieces = [...prev];
        newPieces[index] = [...newPieces[index], currentPlayer];
        return newPieces;
      });
      setFallingPiece(null);

      if (checkWin(index)) {
        updateScore();
        nextRound();
        return;
      }

      setTurn((prev) => (prev === 0 ? 1 : 0));

      // Cpu turn handler
      if (mode === "cpu" && turn() === 1) {
        setTimeout(() => {
          placePiece(getCpuChoice());
        }, 200);
      }
    }, 500);
  };

  const getCpuChoice = () => {
    return Math.floor(Math.random() * 7);
  };

  const checkWin = (index: number) => {
    let limit = 4;
    const col = pieces()[index];
    const rowPos = col.length - 1;
    const row = pieces().map((col) => col[rowPos]);

    const getDiag = (inverted: boolean) => {
      const diag = [];
      let x = index - rowPos;
      let y = 0;

      if (!inverted && x < 0) {
        y = Math.abs(x);
        x = 0;
      }

      if (inverted) {
        x = index + rowPos;
        if (x > maxColLength) {
          y = x - maxColLength;
          x = maxColLength;
        }
      }
      console.log("----");
      console.log(x, y);

      for (let i = 0; i < maxColLength; i++) {
        try {
          // console.log(x + i * (inverted ? -1 : 1), y + i);
          diag.push(pieces()[x + i * (inverted ? -1 : 1)][y + i]);
        } catch (error) {
          break;
        }
      }

      console.log(diag);
      return diag;
    };

    const checkLine = (arr: (0 | 1)[]) => {
      let count = 0;

      for (let i = 0; i < arr.length; i++) {
        const piece = arr[i];
        if (piece !== undefined && piece === turn()) {
          count++;
          if (count >= limit) break;
        } else count = 0;
      }

      return count >= limit;
    };

    if (checkLine(col)) return true;
    if (checkLine(row)) return true;
    if (checkLine(getDiag(false))) return true;
    if (checkLine(getDiag(true))) return true;

    return false;
  };

  const updateScore = () => {
    if (turn() === 0) setScore1((prev) => prev + 1);
    else if (turn() === 1) setScore2((prev) => prev + 1);
  };

  // === RESTART ===
  const restart = () => {
    setTurn(0);
    setPaused(false);
    setScore1(0);
    setScore2(0);
    setFallingPiece(null);
    setPieces([[], [], [], [], [], [], []]);
  };

  const nextRound = () => {
    setTurn((prev) => (prev === 0 ? 1 : 0));
    setFallingPiece(null);
    setPieces([[], [], [], [], [], [], []]);
  };

  // === JSX ===
  return (
    <div class="h-full flex flex-col items-center px-6 lg:px-0 lg:gap-0 lg:justify-between">
      <Header restart={restart} togglePause={togglePause} />

      <div class="flex items-center w-full lg:h-auto lg:w-auto max-w-[632px] lg:max-w-none flex-col lg:flex-row gap-20 relative pb-36">
        <Score score1={score1()} score2={score2()} mode={mode}>
          <Board
            fallingPiece={fallingPiece()}
            pieces={pieces()}
            turn={turn()}
            handlePlay={handlePlay}
            class="hidden lg:flex"
          />
        </Score>

        <Board
          fallingPiece={fallingPiece()}
          pieces={pieces()}
          turn={turn()}
          handlePlay={handlePlay}
          class="lg:hidden"
        />

        <TurnCounter
          paused={paused()}
          turn={turn()}
          play={() => placePiece(Math.floor(Math.random() * 7))}
        />

        <div class="bg-muted-background h-52 rounded-t-[5rem] fixed lg:absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-full lg:max-w-[1200px]">
        </div>
      </div>
    </div>
  );
};

export default Game;
