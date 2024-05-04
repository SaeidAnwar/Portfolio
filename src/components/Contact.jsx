import React from "react";
import "../styles/Contact.css";

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
            <img src="/profiles/git.png" alt="" />
            </a>
          </div>
          <div className="right">
          <a href="https://codeforces.com/profile/saeidanwar" target="_blank">
            <img src="/profiles/codeforces.png" alt="" />
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="right">
          <a href="https://www.linkedin.com/in/md-saeid-anwar-aa7596257/" target="_blank">
            <img src="/profiles/linkedin.png" alt="" />
            </a>
          </div>
          <div className="right">
          <a href="https://www.codechef.com/users/saeidanwar" target="_blank">
            <img src="/profiles/codechef.png" alt="" />
            </a>
          </div>
        </div>
        <div className="sub">
          <div className="right">
          <a href="mailto:mdsaeid753@gmail.com" target="_blank">
            <img src="/profiles/gmail.png" alt="" />
            </a>
          </div>
          <div className="right">
            <a href="https://leetcode.com/u/KingSaeid/" target="_blank">
            <img src="/profiles/leetcode.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
