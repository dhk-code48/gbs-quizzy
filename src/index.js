import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Utility/_global.css";
/* ----- Layouts Component ----- */
import { Navbar } from "./Layouts";
/* ----- Screens Components ----- */
import { Home, Admin, Start, Quiz, Users,Search } from "./Screens";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/start" element={<Start />} />
      <Route exact path="/users/:name/:regidNo" element={<Users />} />
      <Route exact path="/users/" element={<Search />} />
      <Route exact path="/quiz/:name/:regidNo/:type/:subject/:chapter" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
);
