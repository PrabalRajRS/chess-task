import { useEffect, useState } from "react";
import "./App.css";
import Box from "./Component/Box";

export default function App() {
  const [board, setBoard] = useState([]);

  const renderBox = async (id) => {
    const chessBoard = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 7; j >= 0; j--) {
        if ((i + j) % 2 === 0) {
          chessBoard.push("white");
        } else {
          chessBoard.push("black");
        }
      }
    }
    if (!isNaN(id) && id >= 0) {
      chessBoard.splice(id, 1, "red");
    }
    setBoard(chessBoard);
  };

  useEffect(() => {
    renderBox();
  }, []);

  const onClickBox = (id) => {
    renderBox(id);
  };

  return (
    <div className="app">
      <Box onClickBox={onClickBox} board={board} />
    </div>
  );
}
