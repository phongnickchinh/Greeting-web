import './App.css';
import cloudImage from './assets/images/Cloud.png'; // Make sure the path is correct
import logo from './assets/images/Logo.png'; // Make sure the path is correct
import duyn1 from './assets/images/duyn1.jpg'; // Make sure the path is correct
import section2 from './assets/images/section2.png';
import hcn from './assets/images/hcn.png';
import sun from './assets/images/sun.png';
import broad from './assets/images/broad.png';
import flower from './assets/images/flower.png';
import heart from './assets/images/heart.png';
import down_here from './assets/images/Down-here.png';
import prism from './assets/images/prism.png';
import white from './assets/images/white.png';
import phongkeo from './assets/images/phongkeo.png';
import banco from './assets/images/banco.png';

import React from "react";
import Board from "./Board";


function App() {
  return (
    <div className="landing-container">
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
            <p className="overlay-text">Chúc mừng ngày quốc tế phụ nữ, <br/> bé iu hãy lướt chậm xuống dưới để khám phá tấm thiệp này nhé!!</p>
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
                <div>
                  <img src={hcn} alt="background-loichuc" className='img1' />
                </div>
                <div>
                  <img src={sun} alt="anh_hanh_phuc" className='img2'/>
                </div>
              </div>
              <div className='content-box'>
                <div>
                  <img src={broad} alt="anh_bang_den" className='img2'/>
                </div>
                <div>
                  <img src={hcn} alt="background-loichuc" className='img1'/>
                </div>
              </div>
              <div className='content-box'>
                <div>
                  <img src={hcn} alt="background-loichuc" className='img1'/>
                </div>
                <div>
                  <img src={flower} alt="anh_hoa" className='img2'/>
                </div>
              </div>
              <div className='content-box'>
                <div>
                  <img src={heart} alt= "anh_tinh_yeu" className='img2'/>
                </div>
                <div>
                  <img src={hcn} alt="background-loichuc" className='img1'/>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className='section-3'>
          <img src={prism} alt="dsddd" />
          <img src={white} alt="" />
          <div className='secret-gift'>
            <img src={phongkeo} alt="" />
          </div>
          <div className='caro-box'>
            <img src={banco} alt="" />
            <Board />
          </div>
        </section>
        <section className='section-4'>
        </section>
        <section className='section-5'>
        </section>
      </main>
    </div>
  )
}

export default App