import React, { useState } from 'react'
import "./Testimonials.css"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { testimonialsData } from "../../data/testimonialsData"


const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="Testimonials">


            <div className="left-Testimonials">
                <span>Testimonials</span>
                <span className='stroke-text'>what they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    -{testimonialsData[selected].status}
                </span>
            </div>


            <div className="right-Testimonials">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="selected-Image" />

                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? selected(tLength - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                        src={leftArrow}
                        alt="leftarrow" />

                    <img
                    onClick={() => {
                        selected ===tLength -1 
                        ? setSelected(0) 
                        :setSelected((prev) => prev + 1);
                    }}
                        src={rightArrow}
                        alt="rightarrow" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials