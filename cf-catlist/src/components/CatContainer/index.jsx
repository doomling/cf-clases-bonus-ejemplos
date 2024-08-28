import "./styles.css";
import inactiveLike from "./../../assets/like-inactive.png";
import activeLike from "./../../assets/like-active.png";

import { useState } from "react";

export default function CatContainer({ picture, name, bio }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="cat-container">
      <div className="cat-flex-wrapper">
        <img className="cat-profile" src={picture} />
        <div className="cat-details">
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      </div>
      <div className="cat-actions">
        <div className="cat-actions-like" onClick={() => setLiked(!liked)}>
          <img src={!liked ? inactiveLike : activeLike} />
        </div>
      </div>
    </div>
  );
}
