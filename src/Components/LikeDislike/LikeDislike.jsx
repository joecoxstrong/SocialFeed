import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbUp } from "@mui/icons-material";

const LikeDislike = (props) => {
  const [buttonClass, setButtonClass] = useState("inactive");

  function handleClick() {
    if (buttonClass === "inactive") {
      setButtonClass("active");
    } else {
      setButtonClass("inactive");
    }
  }
  return (
    <div>
      <button className={buttonClass} onClick={handleClick}></button>
      <br></br>
      <Button
        className={buttonClass}
        variant="contained"
        // color="secondary"
        endIcon={<ThumbUp />}
        onClick={handleClick}
      ></Button>
    </div>
  );
};

export default LikeDislike;
