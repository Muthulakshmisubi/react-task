import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Img from './images/congrats-card-profile-img.png';
import Images from './images/download.jpeg';
function About(){
    return(
      <>
         <div class="card-container one">
        <div class="congrats-title">Congratulations</div>
        <div class="card-container two">
        <img src={Img} alt="Profile Picture" class="profile-image"/>
        <div class="name">Kiran V</div>
        <div class="institution">Vishnu Institute of Computer Education and Technology, Bhimavaram</div>
        <img src={Images} alt="Smartwatch" class="watch-image"/>
        </div>
  </div>

        
        
      </>
    );
}
export default About