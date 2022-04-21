import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span> Hi! i am</span>
          <span> gashaw gebrie </span>
          <span>
            frontend devloper with high level experience in web designing and
            web devlopement,producting the quality work
          </span>
        </div>
        <button className="i-btn">hire me</button>
        <div className="icons">
          <GitHubIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>

      <div className="i-right">
        <img src="image/gasht.png.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Intro;
