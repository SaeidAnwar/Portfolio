import React from "react";
import "../styles/Portfolio.css"

export default function() {
    return (
        <div className="Portfolio">
            <div className="mainTextDiv">
                <p>Welcome </p>
                <p>To my portfolio</p>
            </div>
            <div className="subTextDiv">
                <div className="left">
                    <p className="left-hi">Hi I am <b>Md Saeid Anwar </b></p>
                    <p className="detail">Currently pursuing my Btech in Computer Engineering from Delhi Technological University.</p>
                </div>
                <div className="right">
                    <img src="/avatar.avif" alt="" />
                </div>
            </div>
        </div>
    );
}