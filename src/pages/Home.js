import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import self_photo from "../assets/self_photo.jpg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Viet Hung Tran</h2>
        <br />
        <h5>Web Developer & Integration Engineering</h5>
        <br></br>
        <img src={self_photo} alt="my_self_photo" />
        <br />
        <div className="prompt">
          <p>Welcome to my portfolio page.</p>
          {/* <p>More to come</p> */}
        </div>

      </div>
    </div>
  );
}

export default Home;
