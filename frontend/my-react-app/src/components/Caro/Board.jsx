import React, { useState } from "react";
import "./Board.css"; // Đảm bảo file CSS có sẵn

const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null)); // Trạng thái của bàn cờ
  const [isXNext, setIsXNext] = useState(true); // Lượt chơi

    const handleClick = (index) => {
    if (cells[index]) return; // Không cho phép bấm vào ô đã có giá trị

    const newCells = [...cells];
    newCells[index] = isXNext ? "X" : "O"; // Gán giá trị "X" hoặc "O"
    setCells(newCells);
    setIsXNext(!isXNext); // Đổi lượt
    };

    return (
    <div className="board">
        {cells.map((value, index) => (
        <div key={index} className="cell" onClick={() => handleClick(index)}>
            {value}
        </div>
        ))}
    </div>
    );
};

export default Board;
