import React from "react";
import "../styles/Skills.css";

export default function () {
  return (
    <div className="Skills">
      <div className="heading-container">
        <p className="heading">Skills</p>
      </div>
      <div className="content-container">
        <div className="card">
            <ul>
                <li>
                    <div className="inner-header">
                        Languages
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="html.png" alt="" />
                            <p>HTMl</p>
                        </div>
                        <div className="img-container">
                            <img src="css.png" alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="img-container">
                            <img src="js.png" alt="" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner-header">
                        Frameworks
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="React.webp" alt="" />
                            <p>React</p>
                        </div>
                        <div className="img-container">
                            <img src="bootstrap.png" alt="" />
                            <p>BootStrap</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="footer">
                Web Development
            </div>
        </div>
        <div className="card">
            <ul>
                <li>
                    <div className="inner-header">
                        Languages
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="csharp_logo.png" alt="" />
                            <p>C-Sharp</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner-header">
                        Tools
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="unity_logo.png" alt="" />
                            <p>Unity Engine</p>
                        </div>
                        <div className="img-container">
                            <img src="krita_logo.png" alt="" />
                            <p>Krita</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="footer">
                Game Development
            </div>
        </div>
        <div className="card">
            <ul>
                <li>
                    <div className="inner-header">
                        Languages
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="cc.png" alt="" />
                            <p>C++</p>
                        </div>
                        <div className="img-container">
                            <img src="python.png" alt="" />
                            <p>Python</p>
                        </div>
                        
                    </div>
                </li>
                <li>
                    <div className="inner-header">
                        Tools
                    </div>
                    <div className="innercard">
                        <div className="img-container">
                            <img src="vs.png" alt="" />
                            <p>VS-Code</p>
                        </div>
                        <div className="img-container">
                            <img src="git.png" alt="" />
                            <p>Git</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="footer">
                Programming
            </div>
        </div>
      </div>
    </div>
  );
}
