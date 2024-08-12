import React from 'react';
import './Task3.css';
function Task3(){
    let button=()=>{
        let like=document.getElementById('like').value;
         
        alert("You have responded");
    }    
    return(
        <>
        <div className="Bg">
            <center>
                <h1>
                    Social Buttons
                </h1>
                <input type="button" id="like" value="Like" onClick={button}/>&nbsp;&nbsp;&nbsp;
                <input type="button" id="comment" value="Comment" onClick={button}/>&nbsp;&nbsp;&nbsp;
                <input type="button" id="share" value="Share" onClick={button}/>
            </center>
        </div>
        </>
    )
}
export default Task3;