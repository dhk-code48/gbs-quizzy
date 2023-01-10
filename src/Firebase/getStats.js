import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "./config";

const useToGetStats = ({ type }) => {
  const [stats, setStats] = useState([]);
  const record = type === "Points" ? "score" : "streak";
  async function getStats() {
    const querySnapshot = await getDocs(
      query(
        collection(firestore, "Statistics", type, "records"),
        orderBy(record, "desc")
      )
    );
    querySnapshot.forEach((doc) => {
      setStats((prev) => [...prev, { ...doc.data(), id: doc.id }]);
    });
  }

  useEffect(() => {
    getStats();
  }, []);

  return stats;
};

export default useToGetStats;
