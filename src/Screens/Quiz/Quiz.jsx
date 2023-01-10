import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from ".";
import Question from "./Question";
import axios from "axios";

import "./_quiz.css";
const Quiz = () => {
  const { name, regidNo, type, subject, chapter } = useParams(
    "name",
    "regidNo",
    "type",
    "subject",
    "chapter"
  );

  const [quizData, setQuizData] = useState(false);
  const [questions, setQuestions] = useState([]);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  /* ==================== GETTING QUIZ DATA ==================== */
  useEffect(() => {
    if (subject === "All") {
      axios.get(`http://localhost:3000/${type}`).then((res) => {
        // console.log("RES", res.data);
        setQuizData(res.data);
      });
    } else {
      axios
        .get(`http://localhost:3000/${type}?subjectName=${subject}`)
        // console.log("RES", res.data[0]);
        .then((res) => {
          setQuizData(res.data[0]);
        });
    }
  }, []);

  /* =================== FILTERING QUESTIONS =================== */
  useEffect(() => {
    // console.log("chapter", quizData);
    if (quizData) {
      let totalQuestions = 25;
      let questionFromChapter = totalQuestions / quizData.noOfChapters;

      if (subject === "All") {
        const noOfSubjects = quizData.length;
        const noOfChapters = 5;
        const noOfQuestionsFromEachSubject = totalQuestions / noOfSubjects;
        const noOfQuestionFromEachChapter =
          noOfQuestionsFromEachSubject / noOfChapters;
        quizData.map((quiz) => {
          Object.keys(quiz.chapters).map((cN) => {
            // console.log("Chopter Name", cN);
            let questionArray = quiz.chapters[cN].questions;
            let newArray = [];
            for (let j = 0; j < noOfQuestionFromEachChapter; j++) {
              const ques = getRndInteger(0, questionArray.length);
              newArray.push({ ...questionArray[ques] });
              questionArray.splice(ques, 1);
            }
            console.log("GUESS", ...newArray);
            setQuestions((prev) => [...prev, ...newArray]);
          });
        });
      } else {
        Object.keys(quizData.chapters).map((cN) => {
          // console.log("Chopter Name", cN);
          let questionArray = quizData.chapters[cN].questions;
          let newArray = [];
          for (let j = 0; j < questionFromChapter; j++) {
            const ques = getRndInteger(0, questionArray.length);
            newArray.push({ ...questionArray[ques] });
            questionArray.splice(ques, 1);
          }
          console.log("GUESS", ...newArray);
          setQuestions((prev) => [...prev, ...newArray]);
        });
      }
    }
  }, [quizData]);

  // useEffect(() => {
  //   if (quizData) {
  //     console.log("Quiz Data", quizData);
  //   }
  // }, [quizData]);

  useEffect(() => {
    console.log("Questions", questions);
  }, [questions]);

  /* 

  ? GENERATING QUESTION FOR CHAPTER


  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      const element = getRndInteger(0, questions.length);
      const newArray = questions.splice(element, 1);
      console.log("NEW ARRAY", newArray);
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    console.log(questions);
  }, [questions]);

 */

  /*
  
  ? GENERATING QUESTION FOR SUBJECT
  useEffect(() => {
    const number_of_chapter = questions.length;
    const number_of_question = number_of_chapter * 10;
    const number_from_each_chapter = 30 / number_of_chapter;

    for (let j = 0; j < questions.length; j++) {
      const chapter = questions[j];

      for (let i = 0; i < number_from_each_chapter; i++) {
        const element = getRndInteger(0, chapter.length);
        const newArray = chapter.splice(element, 1);
        console.log("NEW ARRAY", newArray);
      }
    }
  }, []);
 */

  /* 
    ? GENERATING QUESTION FOR TYPE -> COURSE

  useEffect(() => {
    const number_of_subject = questions.length;
    const question_from_each_subject = 30 / number_of_subject;
    for (let j = 0; j < questions.length; j++) {
      for (let i = 0; i < question_from_each_subject; i++) {
        const element = getRndInteger(0, questions[j].length);
        const newArray = questions[j].splice(element, 1);
        console.log("NEW ARRAY", newArray);
      }
    }
  }, []);
  */
  return (
    <div>
      {/* <Starting /> */}
      {questions.length > 0 && (
        <Question
          questions={questions}
          type={type}
          regidNo={regidNo}
          name={name}
          quiz_type={type}
          subject={subject}
          chapter={chapter}
        />
      )}
    </div>
  );
};

export default Quiz;
