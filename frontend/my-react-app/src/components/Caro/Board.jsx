import React, { useState, useEffect } from "react";
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
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a] && cells[b] && cells[c] &&
            cells[a].player === cells[b].player &&
            cells[a].player === cells[c].player) {
            return cells[a].player;
        }
    }
    if (cells.every(cell => cell !== null)) return "draw";
    return null;
};

const getRandomMove = (cells) => {
    const availableMoves = cells.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
    return availableMoves.length > 0 ? availableMoves[Math.floor(Math.random() * availableMoves.length)] : null;
};

const Board = ({ resetState, onBoardStateChange, onXwin }) => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(false);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (resetState) resetGame();
    }, [resetState]);

    useEffect(() => {
        if (!isXNext && !winner) {
            const delay = cells.every(cell => cell === null) ? 10000 : 1500; // 10s nếu là lượt đầu, 1.5s nếu là các lượt sau
            setTimeout(() => botMove(), delay);
        }
    }, [isXNext, winner]);
    

    useEffect(() => {
        const isEmpty = cells.every(cell => cell === null); // Kiểm tra bàn cờ có trống không
        onBoardStateChange(isEmpty);
      }, [cells, onBoardStateChange]); // Theo dõi sự thay đổi của cells

    useEffect(() => {
        if (winner === "X") {
            onXwin(true);
        }
    }, [winner, onXwin]);

    const handleClick = (index) => {
        if (cells[index] || winner || !isXNext) return;
        makeMove(index, "X");
    };

    const botMove = () => {
        const randomMove = getRandomMove(cells);
        if (randomMove !== null) makeMove(randomMove, "O");
    };

    const makeMove = (index, player) => {
        const popSound = new Audio(click);
        popSound.play();
    
        const newCells = [...cells];
        newCells[index] = { player, image: getRandomImage(player) };
        setCells(newCells);
    
        const gameWinner = checkWinner(newCells);
        if (gameWinner) {
            setWinner(gameWinner);
            return; // Nếu có người thắng, dừng luôn, không đổi lượt
        }
    
        setIsXNext(player === "O"); // Đảm bảo chỉ đổi lượt nếu chưa có người thắng
    };
    

    const resetGame = () => {
        setCells(Array(9).fill(null));
        setIsXNext(false);
        setWinner(null);
        setTimeout(() => botMove(), 500);
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