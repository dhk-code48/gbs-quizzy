import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./config";

const addStats = async ({ type, data }) => {
  await addDoc(collection(firestore, "Statistics", "Stats", type), { ...data });
};
export default addStats;
