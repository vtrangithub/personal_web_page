import React from "react";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GithubIcon from "@material-ui/icons/GitHub";
// 
import "../styles/Home.css";
import self_photo from "../assets/self_photo.jpg";
import ContactForm from "../components/ContactForm/ContactForm";
import { color } from "@mui/system";

function Home() {
  return (
    <div className="container">
      <div >
        <br />
        <br />
        <br />
        <h3 style={{ textAlign: "center" , color:"mediumblue"}}> Viet Hung Tran</h3>
        
        <h5 style={{ textAlign: "center", color :"firebrick" }}>Web Developer & Integration Engineering</h5>
        <p style={{ textAlign: "center", color:"navy" }}>Welcome to my portfolio page.</p>
      
        <div className="image-container">
          <center><img src={self_photo} alt="my_self_photo" />
          </center>
        </div>

        <br />
        <div className="prompt">
          
          {/* <p>More to come</p> */}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>



    </div>
  );
}

export default Home;
