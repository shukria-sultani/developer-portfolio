import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="welcome">
        <span className="I-am ">I am </span>
        <div className="name-title">
         <div class="first"><h1>Shukria Sultani</h1></div>
    <div class="second"><h1>Frontend Developer</h1></div>
    </div>
  
      </div>
      <div className="hero-container" style={{display: "flex", flexDirection: "column"}}>
        <div className="hero" style={{display: "flex", flexDirection: "column"}}>
          <h1 className="ican" style={{fontSize: "3.3rem", alignSelf: "center"}}>I can:</h1>
          <h2>
            C <span>Create (Web Applications)</span>
          </h2>
          <h2>
            O <span>Optimize (Performance)</span>
          </h2>
          <h2>
            D <span>Design (User Interface)</span>
          </h2>
          <h2>
            E <span>Enhance (User Experience)</span>
          </h2>
        </div>

        <button className="cta" onClick={() => navigate("/projects")} style={{alignSelf: "center"}}>
          View Projects
        </button>
      </div>
    </div>
  );
}
