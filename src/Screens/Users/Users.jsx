import "./_users.css";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";
import Achieved from "../Quiz/Achieved";

const Users = () => {
  const { name, regidNo } = useParams("name", "regidNo");
  const [expand, setExpand] = useState(false);
  console.log(regidNo);
  console.log(name);
  return (
    <div className="users">
      <div className="users_profile">
        <div className="users_details">
          <Avatar name={name} size="55" round className="avatar" />
          <h5 className="user__name">{name}</h5>
          <h6 className="user__regidNo">{regidNo}</h6>
        </div>
        <hr color="#777" />
        <div className="users_info">
          <p>You Achived Highest In</p>
          <Achieved on={"users"} amt={1} name={name} regidNo={regidNo} />
          <p
            className="users__seeMore"
            onClick={() => setExpand((prev) => !prev)}
          >
            See {expand ? "Less" : "More"}
          </p>
          {expand && <Achieved on={"users"} name={name} regidNo={regidNo} />}
        </div>
      </div>
    </div>
  );
};

export default Users;
