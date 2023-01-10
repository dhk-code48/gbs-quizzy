import React, { useEffect, useState } from "react";
import { Leaderboard } from "..";
import home_bg from "./home_bg.mp3";

const Home = () => {
  const [bgAudio] = useState(new Audio(home_bg));

  return (
    <div>
      <audio loop={true} src={home_bg} autoPlay={true}></audio>
      <Leaderboard />
    </div>
  );
};

export default Home;
