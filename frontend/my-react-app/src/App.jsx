import './App.css';
import './Animation.css';

import backgroundmusic from './assets/audio/background.mp3';
import winSound from './assets/audio/tada.mp3';

import cloudImage from './assets/images/Cloud.png'; // Make sure the path is correct
import logo from './assets/images/Logo.png'; // Make sure the path is correct
import duyn1 from './assets/images/duyn1.jpg'; // Make sure the path is correct
import section2 from './assets/images/section2.png';
import hcn1 from './assets/images/hcn1.png';
import hcn2 from './assets/images/hcn2.png';
import hcn3 from './assets/images/hcn3.png';
import hcn4 from './assets/images/hcn4.png';
import sun from './assets/images/sun.png';
import broad from './assets/images/broad.png';
import flower from './assets/images/flower.png';
import heart from './assets/images/heart.png';
import down_here from './assets/images/Down-here.png';
import letplay from './assets/images/letplay.png';
import try_again from './assets/images/Try Again.png';
import prism from './assets/images/prism.png';
import white from './assets/images/white.png';
import phongkeo from './assets/images/phongkeo.png';
import banco from './assets/images/banco.png';
import gradient from './assets/images/gradient.png';
import last_layout from './assets/images/last_layout.png';
import last_happy from './assets/images/last_happy.png';


import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Board from "./components/Caro/Board";
import ScrollingImages from "./components/scrollingImages/ScrollingImages";
import Section5 from "./components/section5/Photobooth";
import Firework from './components/firework/Firework';


function App() {

  const [resetState, setResetGame] = React.useState(false);
  const [isBoardEmpty, setIsBoardEmpty] = useState(true); // Mặc định bàn cờ trống
  const [isXwinner, setisXwinner] = useState(false);

  const handleReset = () => {
      setResetGame(prev => !prev); // Toggle để reset game
  };
  

  const handleBoardStateChange = (isEmpty) => {
      setIsBoardEmpty(isEmpty);
  };

  const handleXwin = (hasXWon) => {
    setisXwinner(hasXWon);
  };

  useEffect(() => {
    if (isXwinner) {
        const winAudio = new Audio(winSound);
        winAudio.play();
    }
  }, [isXwinner]);


  const audioRef = useRef(null);

  useEffect(() => {
      const playAudio = () => {
          if (audioRef.current) {
              audioRef.current.muted = true;  // Ban đầu để mute
              audioRef.current.play().then(() => {
                  audioRef.current.muted = false;  // Sau đó bỏ mute
              }).catch(error => console.log("Autoplay bị chặn:", error));
          }
      };

      playAudio();  // Gọi hàm phát nhạc ngay khi trang load

      document.addEventListener("click", playAudio, { once: true }); // Phòng trường hợp vẫn bị chặn

      return () => {
          document.removeEventListener("click", playAudio);
      };
  }, []);



  return (
    
    <div className="landing-container">
        <audio ref={audioRef} loop>
            <source src={backgroundmusic} type="audio/mp3" />
        </audio>
        {/* <audio loop>
            <source src={backgroundmusic} type="audio/mp3" />
        </audio> */}
      <div className="header">
        <div className="header-cloud">
          <img src={cloudImage} alt="Cloud"  />
        </div>
        < div className="header-logo">
          <img src={logo} alt="Logo"/>
        </div>
      </div>
      <main className="main-content">
        <section className='section-1'>
          <div className="image-container">
            <img src={duyn1} alt="Duyenxinhgai" />
            <p className="overlay-text">Chúc mừng ngày quốc tế phụ nữ, <br/> bé iu hãy lướt chậm xuống dưới để<br/> khám phá tấm thiệp này nhé!!</p>
          </div>
        </section>
        <section className='middle-section'>
          {/* nhóm này có 1 lớp overlay hiện chữ down here */}
          <div className="overlay">
            <img src={down_here} alt="down" />
          </div>
        </section>

        <section className='section-2'>
          <div className="image-container-2">
            <img src={section2} alt="Background image" />
            <div className='content'>
              <div className='content-box'>
                <div className='content-box-1'>
                  <img src={hcn1} alt="background-loichuc" className='img1' />
                </div>
                <div>
                  <img src={sun} alt="anh_hanh_phuc" className='img2' id="sun"/>
                </div>
              </div>
              <div className='content-box'>
                <div>
                  <img src={broad} alt="anh_bang_den" className='img2'id='board'/>
                </div>
                <div className='content-box-2'>
                  <img src={hcn2} alt="background-loichuc" className='img1'/>
                </div>
              </div>
              <div className='content-box'>
                <div className='content-box-1'>
                  <img src={hcn3} alt="background-loichuc" className='img1'/>
                </div>
                <div>
                  <img src={flower} alt="anh_hoa" className='img2' id='flower'/>
                </div>
              </div>
              <div className='content-box'>
                <div>
                  <img src={heart} alt= "anh_tinh_yeu" className='img2' id='heart' />
                </div>
                <div className='content-box-2'>
                  <img src={hcn4} alt="background-loichuc" className='img1'/>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className='section-3'>
          <div className='letplay' onClick={handleReset} >
            <img id="letplay" src={isBoardEmpty ? letplay : try_again} alt="Game Status" />
          </div>
          <img src={prism} alt="dsddd" />
          <img src={white} alt="" className='while-layer'/>
          <div className='secret-gift'>
            {isXwinner && <Firework/>}
            <img src={phongkeo} alt="" />
          </div>
          <div className='caro-box'>
            <img src={banco} alt="" />
            <Board resetState={resetState} onBoardStateChange={handleBoardStateChange} onXwin={handleXwin} />
            {isXwinner && (
                <>
                    <style>
                        {`.letplay { display: none; } .white-layer { display: none; } .caro-box { display: none; }`}
                    </style>
                </>
            )}

          </div>
        </section>
        <section className='middle-section'>
          <div className="gradient">
            <img src={gradient} alt="gradient" />
            <p className="gradient-overlay-text">🌷🌷 Chuỗi ảnh yêu thích của anh 🌷🌷</p>
          </div>
        </section>
        <section className='section-4'>
          <ScrollingImages />
        </section>
        <section className='middle-section'>
          <div className="gradient">
            <img src={gradient} alt="gradient" />
            <p className="gradient-overlay-text">🌷Photobooth not ready yet😢, chờ nhé🌷</p>
          </div>
        </section>
        <Section5 />
        <section className='section-6'>
          <div className='section6-back'>
            <img src={last_layout} alt="" />
          </div>
          <div className='top-layer'>
            <div>
            </div>
            <img src={last_happy} alt="" />
            <div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default App