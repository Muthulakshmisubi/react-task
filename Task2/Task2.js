import React from 'react';
import './Task2.css';
import Img from './Task2-images/Rcb.jpg';
import Img1 from './Task2-images/csk.jpg';
const Task2=()=>{
    return(
        <>
        <div className="Bg">
            <div className="Container">
            <center>
                <h1>Super Over League</h1>
                <img src={Img}/>
                <img src={Img1}/>
            </center>
            </div>
        </div>
        </>
    )
}
export default Task2;