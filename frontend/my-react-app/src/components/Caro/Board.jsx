import React, { useState } from "react";
import { useEffect } from "react";
import "./Board.css"; 

import x1 from "../../assets/images/x1.png";
import x2 from "../../assets/images/x2.png";
import x3 from "../../assets/images/x3.png";
import x4 from "../../assets/images/x4.png";

import o1 from "../../assets/images/o1.png";
import o2 from "../../assets/images/o2.png";
import o3 from "../../assets/images/o3.png";
import o4 from "../../assets/images/o4.png";
import o5 from "../../assets/images/o5.png";

import click from "../../assets/audio/click.mp3";

const xImages = [x1, x2, x3, x4];
const oImages = [o1, o2, o3, o4, o5];

const getRandomImage = (player) => {
const images = player === "X" ? xImages : oImages;
  return images[Math.floor(Math.random() * images.length)];
};

const checkWinner = (cells) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Hàng ngang
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Hàng dọc
        [0, 4, 8], [2, 4, 6] // Đường chéo
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a] && cells[b] && cells[c]) {  // Đảm bảo không có null
            if (cells[a].player === cells[b].player && cells[a].player === cells[c].player) {
                return cells[a].player; // "X" hoặc "O" thắng
            }
        }
    }

    // Kiểm tra hòa: Nếu tất cả ô đều đã được đánh mà không có người thắng
    if (cells.every(cell => cell !== null)) {
        return "draw"; // Trả về "draw" nếu hòa
    }

    return null; // Không có ai thắng và chưa hòa
};


const Board = ({ resetState }) => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (resetState) resetGame();
    }, [resetState]);

const handleClick = (index) => {
    if (cells[index] || winner) return; // Nếu ô đã chọn hoặc có người thắng, không làm gì cả

    const popSound = new Audio(click);
    popSound.play();

    const newCells = [...cells];
    newCells[index] = { player: isXNext ? "X" : "O", image: getRandomImage(isXNext ? "X" : "O") };

    setCells(newCells);
    setIsXNext(!isXNext);

    const gameWinner = checkWinner(newCells);
    if (gameWinner) setWinner(gameWinner);
};

const resetGame = () => {
    setCells(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
};

return (
    <div className="game-container">
    <div className="board">
    {cells.map((cell, index) => (
        <div key={index} className="cell" onClick={() => handleClick(index)}>
        {cell && <img src={cell.image} alt={cell.player} className="xo-icon" />}
        </div>
    ))}
    </div>
    {/* {winner && <button className="reset-button" onClick={resetGame}>Chơi lại</button>} */}
</div>
);
};

export default Board;
