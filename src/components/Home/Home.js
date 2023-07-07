import React from "react";
import "../Home/Home.css";
import self_photo from '../Home/self_photo.jpg';
import ContactMe from "../ContactForm/ContactMe";




function Home() {

  return (

    <div className="container">
      <div >
        <br />
        <br />
        <br />
        <h3 className="rainbow-title"> Viet Hung Tran</h3>

        <h4 style={{ textAlign: "center", color: "firebrick" }}>Web Developer & Integration Engineer</h4>
        <p style={{ textAlign: "center", color: "navy" }}>Welcome to my portfolio page</p>

        <div className="image-container">
          <center>
            <img src={self_photo} alt="my_self_photo" />
          </center>
        </div>

        <br />
        <div>
          <ContactMe />
        </div>
      </div>



    </div>
  );
}

export default Home;
