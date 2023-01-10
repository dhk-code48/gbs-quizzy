import React from "react";
import "./_leaderboard.css";
// import Avatar from "avataaars";
// import { FaCrown } from "react-icons/fa";
// import { GiQueenCrown } from "react-icons/gi";
// import { RiVipCrownFill } from "react-icons/ri";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1 className="display">RANKING</h1>
      <div className="scores">
        <div className="scores_user">
          <h5>1. </h5>
          {/* <Avatar
            className="avatar"
            avatarStyle="Circle"
            topType="ShortHairDreads01"
            accessoriesType="Sunglasses"
            hairColor="Black"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Black"
            eyeType="Squint"
            eyebrowType="Angry"
            mouthType="Default"
            skinColor="Light"
          /> */}
          <h4>Hari</h4>
        </div>
        <div>2000 pts</div>
      </div>
      <div className="scores">
        <div className="scores_user">
          <h5>2. </h5>
          {/* <Avatar
            className="avatar"
            avatarStyle="Circle"
            topType="ShortHairDreads01"
            accessoriesType="Sunglasses"
            hairColor="Black"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Black"
            eyeType="Squint"
            eyebrowType="Angry"
            mouthType="Default"
            skinColor="Light"
          /> */}
          <h4>Hari</h4>
        </div>
        <div>2000 pts</div>
      </div>
      <div className="scores">
        <div className="scores_user">
          {/* <h5>3. </h5>
          <Avatar
            className="avatar"
            avatarStyle="Circle"
            topType="ShortHairDreads01"
            accessoriesType="Sunglasses"
            hairColor="Black"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Black"
            eyeType="Squint"
            eyebrowType="Angry"
            mouthType="Default"
            skinColor="Light"
          /> */}
          <h4>Hari</h4>
        </div>
        <div>2000 pts</div>
      </div>
    </div>
  );
};

export default Leaderboard;
