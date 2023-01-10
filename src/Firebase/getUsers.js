import { getDocs,collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {firestore} from "."

const useToGetUsers = () => {
    const [users,setUsers] = useState([]);

    async function fetchUsers(){
        await getDocs(collection(firestore, "Statistics", "Users", "collection")).then((doc)=>{
            doc.docs.forEach((doc)=>{
                setUsers(prev=>[...prev,{...doc.data(),id:doc.id}])
            })
        })
    }

    useEffect(()=>{
        fetchUsers()
    },[]);

    return users;
}
export default useToGetUsers