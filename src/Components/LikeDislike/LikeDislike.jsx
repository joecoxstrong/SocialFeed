import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbUp } from "@mui/icons-material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function LikeDislike() {
  const [likeStatus, setLikeStatus] = useState("👍");
  function handleClick() {
    if (likeStatus === "👎") {
      setLikeStatus("👍");
    } else {
      setLikeStatus("👎");
    }
  }

  return (
    <likebutton
      className={likeStatus}
      onClick={handleClick}
      style={{ marginLeft: 500 }}
    >
      {likeStatus}
    </likebutton>
  );
}

export default LikeDislike;

// const LikeDislike = (props) => {
//   const [buttonClass, setButtonClass] = useState("inactive");

//   function handleClick() {
//     if (buttonClass === "inactive") {
//       setButtonClass("active");
//     } else {
//       setButtonClass("inactive");
//     }
//   }
//   return (
//     <div>
//       <button className={buttonClass} onClick={handleClick}></button>
//       <br></br>
//       <Button
//         className={buttonClass}
//         variant="contained"
//         endIcon={<ThumbUpIcon />}
//         onClick={handleClick}
//       ></Button>
//       <Button
//         className={buttonClass}
//         variant="contained"
//         startIcon={<ThumbDownIcon />}
//         onClick={handleClick}
//       ></Button>
//     </div>
//   );
// };
// export default LikeDislike;
