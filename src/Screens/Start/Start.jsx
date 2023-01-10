import React, { useEffect, useState } from "react";
import "./_start.css";
import { details } from ".";
import { Button } from "../../Components";
// import { FaRandom } from "react-icons/fa";
import { addUsers, getUsers } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const users = getUsers();
  console.log("Users", users);

  const navigate = useNavigate();
  const [type, setType] = useState("Course");
  const [userName, setUserName] = useState("");
  const [regidNo, setRegidNo] = useState("");
  const [subject, setSubject] = useState("All");
  // const [chapter, setChapter] = useState("All");

  // const [tot, setTot] = useState(0);

  function startQuiz() {
    let tot = 0;
    users.map((user) => {
      console.log("UserName", userName);
      console.log("REGID", parseInt(regidNo));
      if (
        user.name === userName &&
        parseInt(user.regid) === parseInt(regidNo)
      ) {
        tot = tot + 1;
      }
    });
    console.log("Total", tot);
    if (tot === 0) {
      addUsers({ name: userName, regid: regidNo });
    }
    const location = `/quiz/${userName}/${regidNo}/${type}/${subject}/all`;
    navigate(location);
  }

  return (
    <div className="start">
      <h1 className="start__title">
        Start <p>Quiz</p>
      </h1>
      <div className="start__options">
        <div>
          <p>Name : </p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <p>Registration : </p>
          <input
            onChange={(e) => setRegidNo(e.target.value)}
            value={regidNo}
            placeholder="Enter Your Registration"
          />
        </div>

        <div>
          <p>Type :</p>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option defaultValue value="Course">
              Course
            </option>
            <option value="General">General Knowledge</option>
          </select>
        </div>
        <div>
          <p>Subject :</p>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option defaultValue>All</option>
            {details[type === "Course" ? 0 : 1].subjects.map(
              (subject, index) => {
                return <option key={index + 1}>{subject.subjectName}</option>;
              }
            )}
          </select>
        </div>
        {/* <div>
          <p>Chapter :</p>
          <select value={chapter} onChange={(e) => setChapter(e.target.value)}>
            {details[type === "Course" ? 0 : 1].subjects.map((subj) =>
              subj.subjectName === subject
                ? subj.chapters.map((chapter) => {
                    return <option value={chapter}>{chapter}</option>;
                  })
                : ""
            )}
            <option defaultValue value={"all"}>
              All
            </option>
          </select>
        </div> */}

        <div>
          {/* <Link to={`/quiz/random/all/all`}>
            <Button>
              <p>Start Random</p>
              <FaRandom />
            </Button>
          </Link> */}
          <br />
          <Button onClick={startQuiz}>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default Start;
