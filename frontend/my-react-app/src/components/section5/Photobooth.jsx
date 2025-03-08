import React from 'react';
import "./section5.css";

import m83 from '../../assets/images/ptb_mini_asset/3.png';
import two_circles from '../../assets/images/ptb_mini_asset/2 hình tròn gần lời thoại.png';
import cloud2 from '../../assets/images/ptb_mini_asset/mây 2.png';
import heart2 from '../../assets/images/ptb_mini_asset/Trái tim 2.png';
import long_arrow from '../../assets/images/ptb_mini_asset/mũi tên dài.png';
import string_of_heart from '../../assets/images/ptb_mini_asset/Dây trái tim 1.png';
import cloud1 from '../../assets/images/ptb_mini_asset/Mây 1.png';
import circle1 from '../../assets/images/ptb_mini_asset/Group-1.png';
import bling_bling from '../../assets/images/ptb_mini_asset/bling bling.png';
import messager from '../../assets/images/ptb_mini_asset/Phong bì.png';
import lock from '../../assets/images/ptb_mini_asset/Ổ khoá.png';
import circle2 from '../../assets/images/ptb_mini_asset/Group.png';
import key from '../../assets/images/ptb_mini_asset/chìa khoá.png';
import group_circle from '../../assets/images/ptb_mini_asset/Group-2.png';
import heart3 from '../../assets/images/ptb_mini_asset/trái tim.png';
import frame_1 from '../../assets/images/ptb_mini_asset/anh duoi.png';
import frame_2 from '../../assets/images/ptb_mini_asset/anh tren.png';
import section5 from '../../assets/images/ptb_mini_asset/section5.png';


const Section5 = () => {
    return (
        <section className="section-5">
            <div className="section5-background">
                <img src={section5} alt="Background" />
            </div>
            <div className="grid-container">
                <img src={m83} alt="Image 1"  className="grid-item"/>
                <img src={two_circles} alt="Image 2" className="grid-item"/>
                <img src={cloud2} alt="Image 3" className="grid-item"/>
                <img src={heart2} alt="Image 4" className="grid-item"/>
                <img src={long_arrow} alt="Image 5" className="grid-item"/>
                <img src={string_of_heart} alt="Image 6" className="grid-item"/>
                <img src={cloud1} alt="Image 7" className="grid-item"/>
                <img src={circle1} alt="Image 8" className="grid-item"/>
                <img src={bling_bling} alt="Image 9" className="grid-item"/>
                <img src={messager} alt="Image 10" className="grid-item"/>
                <img src={lock} alt="Image 11" className="grid-item"/>
                <img src={circle2} alt="Image 12" className="grid-item"/>
                <img src={key} alt="Image 13" className="grid-item"/>
                <img src={group_circle} alt="Image 14" className="grid-item"/>
                <img src={heart3} alt="Image 15" className="grid-item"/>
                <div className="two-main-photo">
                    <div className='main-photo-1'>
                        <img src={frame_1} alt="Image 16" className='grid-item'/>
                        <div className='the-photo'></div>
                    </div>
                    <div className='main-photo-2'>
                        <img src={frame_2} alt="Image 17" className='grid-item'/>
                        <div className='the-photo'></div>
                    </div>
                </div>

            </div>
        </section>
    );
    };

    export default Section5;