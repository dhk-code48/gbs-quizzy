import React, { useEffect, useState } from "react";
import { getStats } from "../../Firebase";

const Items = ({ name, regid }) => {
  const points = getStats({ type: "Points" });
  const streak = getStats({ type: "Streak" });
  const [arr, setArr] = useState({ position: 0 });
  const [str, setStr] = useState({ position: 0 });
  useEffect(() => {
    for (let i = 0; i < points.length; i++) {
      const element = points[i];
      //   console.log("LOOP", element.score);
      console.log(element.regidNo);
      if (
        element.name === name &&
        parseInt(element.regidNo) === parseInt(regid)
      ) {
        console.log("OKAY");
        setArr({ ...element, position: i + 1 });
      }
    }
  }, [points, name, regid]);
  useEffect(() => {
    for (let i = 0; i < streak.length; i++) {
      const element = points[i];
      //   console.log("LOOP", element.score);
      if (
        element.name === name &&
        parseInt(element.regidNo) === parseInt(regid)
      ) {
        console.log("OKAY");
        setStr({ ...element, position: i + 1 });
      }
    }
  }, [streak, name, regid]);

  return (
    <div className="score">
      <p>Points : {arr.position}</p>
      <p>Streak: {str.position}</p>
    </div>
  );
};
export default Items;
