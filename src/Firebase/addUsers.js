import { addDoc, collection } from "firebase/firestore";
import { firestore } from "./config";

const addUsers = async ({name,regid }) => {
  await addDoc(collection(firestore, "Statistics", "Users", "collection"), { name:name,regid:regid });
};
export default addUsers;
