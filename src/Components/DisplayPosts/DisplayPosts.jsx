import LikeDislike from "../LikeDislike/LikeDislike";

const DisplayPosts = (props) => {
  return (
    <div class="main-body" style={{ backgroundColor: "white" }}>
      {props.parentEntries.map((entry) => {
        return (
          <div class="border-box">
            <h4 class="media-heading">{entry.name}</h4>
            <div>{entry.post}</div>
            <div>{entry.date}</div>
            <LikeDislike />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
