import React, { useState } from "react";
import "../styles/Navbar.css";



export default function () {
  function ButtonClickHandler(section) {
    console.log("clicked");
    if(section == "Home")
    {
      console.log(section);
      window.scrollTo(0, 0);
    }
  }
  return (
    <div className="Navbar">
      <div className="left">
      </div>
      <div className="right">
        <button onClick={() => window.scrollTo(0, 0)}>Home</button>
        <button onClick={() => window.scrollTo(0, 730)}>Skills</button>
        <button onClick={() => window.scrollTo(0, 1490)}>Projects</button>
        <button onClick={() => window.scrollTo(0, 2400)}>Profiles</button>
      </div>
    </div>
  );
}
