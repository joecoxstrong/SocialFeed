import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ThumbUp } from "@mui/icons-material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { grey } from "@mui/material/colors";

// import React from "react";
import ClassNames from "classnames";
// import "./app.css";

class LikeDislike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      disliked: false,
    };

    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDisLikeClick = this.onDisLikeClick.bind(this);
  }

  onLikeClick() {
    if (!this.state.disliked) {
      this.setState({
        liked: !this.state.liked,
      });
    } else {
      this.setState({
        liked: true,
        disliked: false,
      });
    }
  }

  onDisLikeClick() {
    if (!this.state.liked) {
      this.setState({
        disliked: !this.state.disliked,
      });
    } else {
      this.setState({
        liked: false,
        disliked: true,
      });
    }
  }

  render() {
    const classLikeButton = ClassNames({
      "like-button": true,
      liked: this.state.liked,
    });

    const classDisLikeButton = ClassNames({
      "dislike-button": true,
      disliked: this.state.disliked,
    });

    return (
      <div>
        <span className={classLikeButton} onClick={this.onLikeClick}>
          Like
        </span>
        <span className={classDisLikeButton} onClick={this.onDisLikeClick}>
          Dislike
        </span>
      </div>
    );
  }
}

export default LikeDislike;

// function LikeDislike() {
//   const [likeStatus, setLikeStatus] = useState("😎");
//   function handleClick() {
//     if (likeStatus === "😡") {
//       setLikeStatus("😎");
//     } else {
//       setLikeStatus("😡");
//     }
//   }

//   return (
//     <button
//       // className={likeStatus}
//       onClick={handleClick}
//       style={{ marginLeft: 500 }}
//       class="likebutton"
//     >
//       {likeStatus}
//     </button>
//   );
// }

// export default LikeDislike;

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
