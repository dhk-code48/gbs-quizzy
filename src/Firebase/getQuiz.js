import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from ".";

const useToGetQuiz = (type, subject, chapter) => {
  const [quizs, setQuizs] = useState([]);
  const ref = collection(firestore, type, subject, chapter);

  async function getData() {
    (await getDocs(ref)).forEach((doc) =>
      setQuizs((prev) => [...prev, doc.data()])
    );
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [type, subject, chapter]);

  return quizs;
};

export default useToGetQuiz;
