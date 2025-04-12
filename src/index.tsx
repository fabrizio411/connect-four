/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import E404 from "./pages/E404";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => (
  <Router>
    <Route path="/" component={Home} />
    <Route path="game/:id" component={Game} />
    <Route path="*404" component={E404} />
  </Router>
), root!);
