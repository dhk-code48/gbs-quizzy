import { addDoc, collection } from "firebase/firestore";
import { firestore } from ".";

async function addToStats({
  type,
  name,
  regidNo,
  score,
  streak,
  timeTaken,
  quiz_type,
  subject,
  chapter,
}) {
  await addDoc(collection(firestore, "Statistics", type, "records"), {
    type: type,
    name: name,
    regidNo: parseInt(regidNo),
    score: parseInt(score),
    timeTaken: parseInt(timeTaken),
    streak: parseInt(streak),
    quiz_type: quiz_type,
    subject: subject,
    chapter: chapter,
  });
}
export default addToStats;
