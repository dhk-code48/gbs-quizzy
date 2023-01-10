import { addDoc, collection } from "firebase/firestore";
import { firestore } from ".";
export async function addQuiz({ type, subject, data, options, chapter }) {
  const ref = collection(firestore, type, subject, chapter);
  addDoc(ref, {
    type: type,
    chapter: chapter,
    questionImg: data.questionImg,
    subject: subject,
    avgTime: data.avgTime,
    correct: data.correct,
    level: data.level,
    options: options,
    points: data.points,
    question: data.question,
  }).catch((e) => console.log(e));
  // .finally(() => window.location.reload());
}
