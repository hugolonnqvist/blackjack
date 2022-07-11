import React, { useState } from "react";

import "./App.css";
import Game from "./components/Game";

function App() {
  const [activeGame, setActiveGame] = useState(false);

  const startGameHandler = () => {
    setActiveGame(true);
  };

  return (
    <div className="App">
      <header>
        <h1>Amo Jojos Blackjack</h1>
      </header>
      <main>
        <div>
          {activeGame ? (
            <Game />
          ) : (
            <button onClick={startGameHandler}>Start game</button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
