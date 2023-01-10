import React, { useState } from "react";
import "./_leaderboard.css";
import Avatar from "react-avatar";
import { getStats } from "../../Firebase";
import { details } from "./_data";
import { GiTrophyCup } from "react-icons/gi";

const Leaderboard = () => {
  const [type, setType] = useState("Points");
  const [subject, setSubject] = useState("All");
  // const [chapter, setChapter] = useState("All");
  const points = getStats({ type: "Points" });
  const streak = getStats({ type: "Streak" });
  console.log(points);
  return (
    <div className="leaderboard">
      <h1 className="leaderboard__title">Leaderboard</h1>
      <table>
        <thead>
          <div className="tableth">
            <td className="leaderboard__type">
              <div>
                <GiTrophyCup size={50} color="#fff" />
              </div>
              <div>
                <select
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <option value={"All"}>All</option>
                  {Object.keys(details).map((subjectName, index) => {
                    return (
                      <option key={index + 1} value={subjectName}>
                        {subjectName}
                      </option>
                    );
                  })}
                </select>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value={"Points"}>Highest Points</option>
                  <option value={"Streak"}>Highest Streak</option>
                </select>
              </div>
            </td>
          </div>
        </thead>
        <tbody className="leaderboard__table">
          {type === "Points"
            ? points.map((record, index) => {
                if (subject === "All") {
                  return (
                    <div key={index + 1} className="tableTr">
                      <td className="user_profile">
                        <p className="user_index">{index + 1}</p>
                        <Avatar
                          name={record.name}
                          size="45"
                          round
                          className="avatar"
                        />
                        <div className="user_profileDiv">
                          <p>{record.name}</p>
                          <p>{record.regidNo}</p>
                        </div>
                      </td>
                      <td className="record"> {record.score}</td>
                    </div>
                  );
                } else if (subject === record.subject) {
                  return (
                    <div key={index + 1} className="tableTr">
                      <td className="user_profile">
                        <p className="user_index">{index + 1}</p>
                        <Avatar
                          name={record.name}
                          size="45"
                          round
                          className="avatar"
                        />
                        <div className="user_profileDiv">
                          <p>{record.name}</p>
                          <p>{record.regidNo}</p>
                        </div>
                      </td>
                      <td className="record"> {record.score}</td>
                    </div>
                  );
                }
              })
            : streak.map((record, index) => {
                if (subject === "All") {
                  return (
                    <div key={index + 1} className="tableTr">
                      <td className="user_profile">
                        <p className="user_index">{index + 1}</p>
                        <Avatar
                          name={record.name}
                          size="45"
                          round
                          className="avatar"
                        />
                        <div className="user_profileDiv">
                          <p>{record.name}</p>
                          <p>{record.regidNo}</p>
                        </div>
                      </td>
                      <td>Streak : {record.streak}</td>
                    </div>
                  );
                } else if (subject === record.subject) {
                  return (
                    <div key={index + 1} className="tableTr">
                      <td className="user_profile">
                        <p className="user_index">{index + 1}</p>
                        <Avatar
                          name={record.name}
                          size="45"
                          round
                          className="avatar"
                        />
                        <div className="user_profileDiv">
                          <p>{record.name}</p>
                          <p>{record.regidNo}</p>
                        </div>
                      </td>
                      <td>Streak : {record.streak}</td>
                    </div>
                  );
                }
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
