import React, { useEffect, useState } from "react";

const Starting = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <>
      {counter <= 3 && (
        <div className="starting">
          <h1>1</h1>
        </div>
      )}
    </>
  );
};

export default Starting;
