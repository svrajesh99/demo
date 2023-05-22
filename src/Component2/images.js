import React from "react";
import "./images.css";
import stu1 from './image 1.png';
import stu2 from './image 1 (1).png';
import stu6 from './image 1 (2).png';
import stu3 from './image 1 (3).png';
import stu4 from './image 1 (4).png';
import stu5 from './image 1 (5).png';
import { TbMathGreater } from 'react-icons/tb';
const imageslider = () => {
    return (
        <>
            <div className="alumni">
                <div className="heading">
                    <h2>Our Distinguished Alumni</h2>
                    <hr></hr>
                </div>
                <div className="al-img">
                    <img className="image1" src={stu1}></img>
                    <img className="image2" src={stu2}></img>
                    <img className="image3" src={stu6}></img>
                    <img className="image4" src={stu3}></img>
                    <img className="image5" src={stu4}></img>
                    <img className="image6" src={stu5}></img>
                </div>
                <div className="footer"><div>all alumni&nbsp;&nbsp;<TbMathGreater /></div></div>
            </div>
        </>
    );
}
export default imageslider;