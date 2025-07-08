"use client";

import React, { useState } from "react";

const TicTacToeBasic: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [player, setPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);

  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];

  const checkWinner = (board: (string | null)[]) => {
    for (let combo of wins) {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = player;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div style={{ maxWidth: 180, margin: "20px auto", textAlign: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 50px)",
          gridTemplateRows: "repeat(3, 50px)",
          gap: "5px",
          marginBottom: "10px",
        }}
      >
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 50,
              height: 50,
              fontSize: 24,
              border: "1px solid black",
              cursor: board[i] || winner ? "not-allowed" : "pointer",
              backgroundColor: cell ? "light blue" : "blue",
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner ? (
        <p style={{ fontWeight: "bold" }}>Winner: {winner}</p>
      ) : (
        <p>Current Player: {player}</p>
      )}

      <button
        onClick={reset}
        style={{
          marginTop: 10,
          padding: "8px 16px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToeBasic;
