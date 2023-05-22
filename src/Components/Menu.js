import React from "react";
import './Menu.css';
import logo from './VNR.png';
import searchIcon from './download.png';
import closeIcon from './Menu.png';
import {RiInstagramFill} from 'react-icons/ri';
import { BsSearch, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
const Menu = () => {
    return (
        <><div className="main-menu">
            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h1>VNRVJIET</h1>
                </div>
                <div className="menu-items">
                    <div className="menu-item">
                        <h2>Home</h2>            </div>
                    <div className="menu-item">
                        <h3>Administrastion</h3>
                        <span>&#8594;</span>
                    </div>
                    <div className="menu-item">
                        <h3>Acadamics</h3>
                        <span>&#8594;</span>
                    </div>
                    <div className="menu-item">
                        <h3>Campuis</h3>
                        <span>&#8594;</span>
                    </div>
                    <div className="menu-item">
                        <h3>Student Center</h3>
                        <span>&#8594;</span>
                    </div>
                    <div className="menu-item">
                        <h3>Training & Placement</h3>
                        <span>&#8594;</span>
                    </div>
                    <div className="menu-item">
                        <h3>Research</h3>
                        <span>&#8594;</span>
                    </div>
                </div>
            </div>
            <div className="menu-1">
                <div className="menu-21">
                    <div className="search">
                        <input type="text" placeholder="Search" /><BsSearch id="icon"/>
                    </div>
                    <div>
                        <img src={closeIcon} alt="close"></img>
                    </div>
                </div>
                <div className="links">
                    <h1>Key Links</h1>
                </div>
                <div className="image-grid">
                    <div className="image1"><h2>Administrastion</h2></div>
                    <div className="image2"><h2>Examination</h2></div>
                    <div className="image3"><h2>Careers</h2></div>
                    <div className="image4"><h2>Contact Us</h2></div>
                </div>
                <div className="contact">
                    <div><h2>Contact&nbsp; &nbsp;With &nbsp;&nbsp;Us</h2></div>
                    <div className="social-media"><p><BsFacebook  /></p><p><RiInstagramFill /></p><p><BsLinkedin /></p><p><BsTwitter /></p></div>
                </div>
            </div>
        </div >
        </>
    );
}
export default Menu;