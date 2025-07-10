"use client";

import React, { useState } from "react";

const TicTacToeBasic: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);

  const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];

  const checkWinner = (board: (string | null)[]) => {
    for (let combo of wins) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const computerMove = (newBoard: (string | null)[]) => {
    const emptyIndices = newBoard.map((cell, i) => cell === null ? i : null).filter(i => i !== null) as number[];

    if (emptyIndices.length === 0) return;

    const index = emptyIndices[0];
    newBoard[index] = "O";
    const win = checkWinner(newBoard);
    setBoard([...newBoard]);

    if (win) {
      setWinner(win);
    }
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";

    let win = checkWinner(newBoard);
    if (win) {
      setBoard(newBoard);
      setWinner(win);
      return;
    }

    computerMove(newBoard);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
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
              backgroundColor: cell ? "#b3d9ff" : "#3399ff",
              color: "black",
            }}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner ? (
        <p style={{ fontWeight: "bold" }}>Winner: {winner}</p>
      ) : (
        <p>Player: X (You)</p>
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
