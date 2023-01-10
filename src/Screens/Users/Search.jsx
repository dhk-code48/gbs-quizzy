import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import "./_users.css";
import { getUsers } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import Items from "./Items";

const Search = () => {
  const users = getUsers();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  function handleClick(i) {
    navigate(`/users/${users[i].name}/${users[i].regid}`);
  }
  const [filter, setFilter] = useState({});

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (
        user.name.toUpperCase().indexOf(userName.toUpperCase()) > -1 ||
        user.regid.toString().indexOf(userName) > -1
      ) {
        setFilter((prev) => ({ ...prev, [i]: "" }));
      } else {
        setFilter((prev) => ({ ...prev, [i]: "none" }));
      }
    }
  }, [userName, users]);

  return (
    <div className="users__search">
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter Your Name"
        className="users_box"
      />
      <h3 className="pos">Positions</h3>
      <div className="users_list">
        {users.length > 0 &&
          users.map((user, index) => {
            console.log("", user.regid);
            return (
              <div
                key={index + 1}
                onClick={() => handleClick(index)}
                className="users__items"
                style={{ display: `${filter[index]}` }}
              >
                <div>
                  <Avatar size="45" round name={user.name} />
                  <div className="user_name">
                    <h3>{user.name}</h3>
                    <h4>{user.regid}</h4>
                  </div>
                </div>
                <Items name={user.name} regid={user.regid} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
