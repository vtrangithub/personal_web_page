import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import GithubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Footer/Footer.css";
import MyLinkedinIcon from "../IconLinks/MyLinkedinIcon";
import MyGithubIcon from "../IconLinks/MyGithubIcon";


function Footer() {
  

  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        {/* <TwitterIcon /> */}
        {/* <FacebookIcon /> */}
        <MyLinkedinIcon style={{ cursor: 'pointer' }}/>
        <MyGithubIcon style={{ cursor: 'pointer' }}/>
        {/* <LinkedInIcon /> */}
        {/* <LinkedInIcon onClick={handleLinkedInClick} /> */}
      </div>
      <p> vtranseattle@gmail.com</p>
    </div>
  );
}

export default Footer;
