import "./ProImgStyles.css"
import React from "react";
import IntroImg from  "../assest/face pic.jpeg";
import { Link } from "react-router-dom";

const ProImg = () => {
  return (
    <div className = "Pro">
      <div classNmae= "mask">
        <img className ="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A </p>
        <h1>Stack Mern Developer</h1>
        <div>
          <Link to="/proect" className="button-33">Projects</Link>
          <Link to="/contact" className="button-33 button-light">Contact</Link>
        </div>
      </div>
    </div>
  )
};

export default ProImg;