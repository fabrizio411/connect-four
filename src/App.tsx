import type { Component } from "solid-js";
import Button from "./components/Button";
import ScoreCard from "./components/ScoreCard";
import SmallButton from "./components/SmallButton";

const App: Component = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <Button>BUTTON</Button>
      <ScoreCard numPlayer={1} />
      <SmallButton>Menu</SmallButton>
    </div>
  );
};

export default App;
