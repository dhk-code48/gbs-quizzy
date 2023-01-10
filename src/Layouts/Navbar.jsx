import React from "react";
import "./_navbar.css";
// import { HiColorSwatch } from "react-icons/hi";
import { Button } from "../Components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo display">
          <h1>QU</h1>
          <p>IZZY</p>
        </div>
      </Link>
      <div className="flex">
        <Link className="nav_links" to={"/users"}>
          <h4>Users</h4>
        </Link>
        <Link to={"/start"}>
          <Button>Start Quiz</Button>
        </Link>
        {/* <div className="icon-btn">
          <HiColorSwatch size={20} />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
