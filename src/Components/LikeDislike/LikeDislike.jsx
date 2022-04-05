import React, { useState } from 'react';
import '../../app.css'


const LikeDislike = (props) => {

    function handleClick(){

    }
    return (
        <div>
            <button className="inactive" onClick={handleClick}>{props.message}</button>
        </div>
      );
}
 
export default LikeDislike;