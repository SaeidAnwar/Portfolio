import React from "react";
import "../styles/Contact.css";

import forcesImg from "/public/profiles/codeforces.png"
import chefImg from "/public/profiles/codechef.png"
import leetImg from "/public/profiles/leetcode.png"
import gmailImg from "/public/profiles/gmail.png"
import gitImg from "/public/profiles/git.png"
import linkImg from "/public/profiles/linkedin.png"

export default function () {
  return (
    <div className="Contact">
      <div className="heading-container">
        <p className="heading">Profiles</p>
      </div>
      <div className="profile-container">
        <div className="sub"> 
          <div className="right">
          <a href="https://github.com/SaeidAnwar" target="_blank">
            <img src={gitImg} alt="" />
            </a>
          </div>
          <div className="right">
          <a href="https://codeforces.com/profile/saeidanwar" target="_blank">
            <img src={forcesImg} alt="" />
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="right">
          <a href="https://www.linkedin.com/in/md-saeid-anwar-aa7596257/" target="_blank">
            <img src={linkImg} alt="" />
            </a>
          </div>
          <div className="right">
          <a href="https://www.codechef.com/users/saeidanwar" target="_blank">
            <img src={chefImg} alt="" />
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="right">
          <a href="mailto:mdsaeid753@gmail.com" target="_blank">
            <img src={gmailImg} alt="" />
            </a>
          </div>
          <div className="right">
            <a href="https://leetcode.com/u/KingSaeid/" target="_blank">
            <img src={leetImg} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
