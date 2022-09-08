import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"


const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
                <div></div>
                <span> the best fitness club in africa</span>
            </div>
            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your </span>
                </div>
                <div>
                    <span>
                        Ideal body
                    </span>
                </div>
                <div>
                    <span>
                    In here we will help you to shape and build your ideal body and live up your life to the fullest
                    </span>
                </div>
            </div>
            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert Coaches</span>
                </div>
                <div>
                    <span>+4000</span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>+300</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}


            <div className="hero-buttons">
                <buttons className ="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>


            <div className="heart-rate">
                <img src={Heart} alt="Heart" />
                <span>Heart Rate</span><span>116bmp</span>
            </div>
            {/* hero images */}

            <img src={hero_image} alt="images" className='hero-image' />
            <img src={hero_image_back} alt="images" className='hero_image_back' />


            {/* calories */}

            <div className="calories">
                <img src={Calories} alt="" />
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
        </div>
    </div>
  )
}

export default Hero