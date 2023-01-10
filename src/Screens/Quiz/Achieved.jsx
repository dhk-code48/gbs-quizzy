import React, { useEffect, useState } from "react";
import { getStats } from "../../Firebase";

const Achieved = ({ amt, on, type, name, regidNo, pnt, stk }) => {
  const points = getStats({ type: "Points" });
  const streak = getStats({ type: "Streak" });
  const [arr, setArr] = useState([]);
  const [str, setStr] = useState([]);
  //   console.log("Points", points);
  //   console.log("Points", streak);

  useEffect(() => {
    for (let i = 0; i < points.length; i++) {
      const element = points[i];
      //   console.log("LOOP", element.score);
      if (
        element.name === name &&
        parseInt(element.regidNo) === parseInt(regidNo)
      ) {
        console.log("OKAY");
        setArr((prev) => [...prev, { ...element, position: i + 1 }]);
      }
    }
  }, [points]);
  useEffect(() => {
    for (let i = 0; i < streak.length; i++) {
      const element = points[i];
      //   console.log("LOOP", element.score);
      if (
        element.name === name &&
        parseInt(element.regidNo) === parseInt(regidNo)
      ) {
        console.log("OKAY");
        setStr((prev) => [...prev, { ...element, position: i + 1 }]);
      }
    }
  }, [streak]);

  // useEffect(() => {
  //   console.log("ELEMENT", arr);
  // }, [arr]);

  // var newArray = points.filter(function (el) {
  //   return el.name === name && parseInt(el.score) === parseInt(pnt);
  // });
  //   useEffect(() => {
  //     console.log("NEW ARRAY", newArray);
  //   }, [newArray]);

  const Items = ({ pos, type }) => {
    return (
      <div className={`${on === "users" ? "users__container" : "container"}`}>
        <h1>#{pos} Rank In</h1>
        <h3>
          <i>Higest {type} Leaderboard</i>
        </h3>
        {/* <p>see more </p> */}
      </div>
    );
  };

  return (
    <div className={`${on === "users" ? "user__achived" : "what_you_achived"}`}>
      <div>
        {amt === 1
          ? arr.length > 0 && <Items type={"Points"} pos={arr[0].position} />
          : arr.length > 0 &&
            arr.map((pos) => {
              if (type === "present") {
                if (
                  parseInt(pnt) === parseInt(pos.score) &&
                  parseInt(pos.streak) === parseInt(stk)
                ) {
                  return <Items type={"Points"} pos={pos.position} />;
                }
              } else {
                return <Items type={"Points"} pos={pos.position} />;
              }
            })}
      </div>
      <div>
        {amt === 1
          ? str.length > 0 && <Items type={"Streak"} pos={arr[0].position} />
          : str.length > 0 &&
            str.map((pos) => {
              if (type === "present") {
                console.log("POS");
                if (
                  parseInt(pnt) === parseInt(pos.score) &&
                  parseInt(pos.streak) === parseInt(stk)
                ) {
                  return <Items type={"Streak"} pos={pos.position} />;
                }
              } else {
                return <Items type={"Streak"} pos={pos.position} />;
              }
            })}
      </div>
    </div>
  );
};

export default Achieved;
