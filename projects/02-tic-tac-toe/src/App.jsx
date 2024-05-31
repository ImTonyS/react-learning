import { useState } from "react";
import { Square } from "./components/Square.jsx";
import { WINNER_COMBOS, TURNS } from "./constants.js";

import { WinnerModal } from './components/WInnerModal.jsx'


export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.x);

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //Si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x)
    setWinner(null)

  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null )
  }

  const updateBoard = (index) => {
    //No actualizar si ya tiene algo
    if (board[index] || winner) return

    //Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Cambio de turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
    
  }
  return (
      <main className='board'>
        <h1>TicTacToe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
        </section>


        <section className="turn">
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

        

      </main>
  )
}

