import React, { useEffect, useState } from "react";
import addToStats from "../../Firebase/addToStats";
import Achieved from "./Achieved";

const Result = ({
  regidNo,
  name,
  data,
  question,
  quiz_type,
  subject,
  chapter,
}) => {
  // console.log("Questions = ", question);
  const width = (data.points / data.totalPoints) * 100;
  const [status, setStatus] = useState(false);
  const [bgColors, setBgColors] = useState({
    0: "#ffd6a5",
    1: "#caffbf",
    2: "#9bf6ff",
    3: "#ffc6ff",
  });

  const [realPoints, setRealPoints] = useState();
  useEffect(() => {
    if (data.totalPoints > 100) {
      setRealPoints(
        data.points - data.points * ((data.totalPoints - 100) / 100)
      );
    } else {
      setRealPoints(
        data.points - data.points * ((100 - data.totalPoints) / 100)
      );
    }
  }, []);

  useEffect(() => {
    if (typeof data.streak === "number") {
      addToStats({
        quiz_type: quiz_type,
        subject: subject,
        chapter: chapter,
        type: "Points",
        name: name,
        regidNo: regidNo,
        score: realPoints,
        timeTaken: data.timeTaken,
        streak: data.streak,
      }).finally(() => {
        setStatus(true);
      });
    }
  }, [data.streak]);

  useEffect(() => {
    if (typeof data.streak === "number") {
      addToStats({
        quiz_type: quiz_type,
        subject: subject,
        chapter: chapter,
        type: "Streak",
        name: name,
        regidNo: regidNo,
        score: realPoints,
        timeTaken: data.timeTaken,
        streak: data.streak,
      }).finally(() => {
        setStatus(true);
      });
    }
  }, [data.streak]);

  // setBgColors(() => ({
  //   0: "#ccc",
  //   1: "#ccc",
  //   2: "#ccc",
  //   3: "#ccc",
  //   [i]: "#34e065",
  // }));

  // useEffect(() => {
  //   let newArray = stats_points.filter(function (el) {
  //     return parseInt(el.points) === data.points && name === el.name;
  //   });
  //   setArr({ ...newArray });
  //   console.log("arr", arr);
  // }, []);

  return (
    <div className="result">
      <div className="result__details">
        <div className="result__points">
          <h3>Gained Points</h3>
          <div className="result__pointSlider">
            <div style={{ width: `${width}%` }} />
          </div>
          <h2>{parseInt(realPoints)}/100</h2>
        </div>
        <div className="result__content">
          <div className="result__timeTaken">
            <h3>Total time taken </h3>
            <h2> {data.timeTaken} sec</h2>
          </div>
          <div>
            <h3>Average Time </h3>
            <h2>{data.averageTime} sec</h2>
          </div>
          <div>
            <h3>Streak</h3> <h2>{data.streak}</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1>You Achived The Following Title</h1>
      <br />

      <Achieved
        type={"present"}
        name={name}
        pnt={realPoints}
        stk={data.streak}
        regidNo={regidNo}
      />
      <br />

      {/* <div className="question_summary">
        <h1>Question Summary</h1>
        <br />
        <br />

        <h3>Total Quesion Peformed : {data.totalQuestion}</h3>
        <br />
        <h3>Total Correct Questions : {data.totalCorrect}</h3>
        <br />
        <h3>Total InCorect Questions : {data.totalInCorrect}</h3>
        <br />
        <div>
          <br />
          <h2>Questions :</h2>
          <br />
          <br />
          <div> {question.map((ques, index) => {
              console.log("Correc Index", ques.correct);
              return (
                <div key={index + 1}>
                  <h3>{ques.question}</h3>
                  <div className="result__singleQuestion">
                    {ques.options.map((opt, i) => {
                      console.log("Option Index", data.optionIndex[index]);
                      return (
                        <p
                          key={i + 1}
                          style={{
                            padding: 20,
                            background:
                              parseInt(data.optionIndex[i]) ===
                              parseInt(ques.correct)
                                ? "green"
                                : "red",
                          }}
                        >
                          {opt.label}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })} 
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Result;
