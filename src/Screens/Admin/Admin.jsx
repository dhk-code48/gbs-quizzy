import React, { useState } from "react";
import "./_admin.css";
import { Button } from "../../Components";
import { addQuiz } from "../../Firebase";

const Admin = () => {
  const [type, setType] = useState("Course");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [avgTime, setAvgTime] = useState();
  const [correct, setCorrect] = useState();
  const [level, setLevel] = useState("Easy");
  const [options, setOptions] = useState([
    { label: "1", img: "" },
    { label: "2", img: "" },
    { label: "3", img: "" },
    { label: "4", img: "" },
  ]);
  const [points, setPoints] = useState("");
  const [question, setQuestion] = useState("");
  const [questionImg, setQuestionImg] = useState("");
  const [active, setAcive] = useState(false);

  function handleAddQuiz() {
    setAcive(true);

    addQuiz({
      type: type,
      subject: subject,
      chapter: chapter,
      options: options,
      data: {
        avgTime: avgTime,
        correct: correct,
        level: level,
        points: points,
        question: question,
        questionImg: questionImg,
      },
    });
  }

  return (
    <div className="admin__add">
      <h1>Add Question</h1>
      <div className="admin__addBtn">
        <Button onClick={handleAddQuiz}>Add + </Button>
      </div>
      <div className="admin__addForm">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Course">Course</option>
          <option value="General Knowledge">General Knowledge</option>
        </select>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option>Easy</option>
          <option>Hard</option>
          <option>Medium</option>
        </select>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject Name"
        />{" "}
        <input
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Chapter Name"
        />
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the Question"
        />
        <input
          value={questionImg}
          onChange={(e) => setQuestionImg(e.target.value)}
          placeholder="Img For Question"
        />
        <div className="admin__addFormOptions">
          <div>
            <input
              value={options[0].label}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  0: { img: prev[0].img, label: e.target.value },
                }))
              }
            ></input>
            <input
              value={options[0].img}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  0: { label: prev[0].label, img: e.target.value },
                }))
              }
              placeholder="Option Img for 0"
            ></input>
          </div>
          <div>
            <input
              value={options[1].label}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  1: { img: prev[1].img, label: e.target.value },
                }))
              }
            ></input>
            <input
              value={options[1].img}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  1: { label: prev[1].label, img: e.target.value },
                }))
              }
              placeholder="Option Img for 1"
            ></input>
          </div>
          <div>
            <input
              value={options[2].label}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  2: { img: prev[2].img, label: e.target.value },
                }))
              }
            ></input>
            <input
              value={options[2].img}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  2: { label: prev[2].label, img: e.target.value },
                }))
              }
              placeholder="Option Img for 2"
            ></input>
          </div>
          <div>
            <input
              value={options[3].label}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  3: { img: prev[3].img, label: e.target.value },
                }))
              }
            ></input>
            <input
              value={options[3].img}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  3: { label: prev[3].label, img: e.target.value },
                }))
              }
              placeholder="Option Img for 3"
            ></input>
          </div>
        </div>
        <input
          value={correct}
          onChange={(e) => setCorrect(e.target.value)}
          placeholder="Correct Option Index"
        />
        <input
          value={avgTime}
          onChange={(e) => setAvgTime(e.target.value)}
          placeholder="Average Time Taken"
        />
        <input
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          placeholder="Points to be rewared "
        />
      </div>
      {active && (
        <div>
          {",{"} "avgTime": {avgTime},
          <br />
          "chapter": "{chapter}",
          <br /> "correct": "{correct}",
          <br /> "level": "{level}",
          <br /> "options": [<br />
          {`{ "img": "${options[0].img}", "label":"${options[0].label}'"}`},
          <br />
          {`{ "img": "${options[1].img}", "label":"${options[1].label}" }`},
          <br />
          {` { "img": "${options[2].img}}", "label":"${options[2].label}" }`},
          <br />
          {`{ img: '${options[3].img}', label: '${options[3].label}' }`}, <br />
          ],
          <br />
          "points": "{points}", <br />
          "question": "{question}", "questionImg": "{questionImg}", {"}"}
        </div>
      )}
    </div>
  );
};

export default Admin;
