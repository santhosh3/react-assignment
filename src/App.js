import React, { useMemo, useState } from "react";
const choices = ["rock", "paper", "scissors"];

export default function App() {
  const [selected, setSelected] = useState("");
  const [computedSelected, setComputedSelected] = useState("");

  const play = () => {
    if (!selected) {
      return;
    }
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    setComputedSelected(choices[computerChoiceIndex]);
  };

  const result = useMemo(() => {
    if (computedSelected === selected) {
      return `it's a tie`;
    } else {
      if (
        (computedSelected === "rock" && selected === "scissors") ||
        (computedSelected === "paper" && selected === "rock") ||
        (computedSelected === "scissors" && selected === "paper")
      ) {
        return "player2 won";
      }
      return "player1 won";
    }
  }, [computedSelected, selected]);

  return (
    <div>
      <center>
      <div>
        <button onClick={() => setSelected("rock")}>rock</button>
        <button onClick={() => setSelected("paper")}>paper</button>
        <button onClick={() => setSelected("scissors")}>scissors</button>
      </div>
      <button onClick={play}>play</button>
      <p>player1 choice: {selected}</p>
      <p>player2 choice: {computedSelected}</p>
      <div>{result}</div>
      </center>
    </div>
  );
}

