import React, { Fragment, useContext, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header, { Appcontext } from "./a - header";

import Timer from "./b - timer";
import TodoList from "./c - todo list";
import Documentation from "./d - documentation";
import Login from "./e - login";
import ResetPassword from "./f - resetPassword";
import Signup from "./g - signup";
import Page404 from "./h - page404";

import { motion, useScroll } from "framer-motion";
import "../index.css";

//cree function de routage
export default function HomePage() {

  //cree variables de theme
  const [Mode, SetMode] = useState("naturale");
  const silverMode = useContext(Appcontext);

  //crre useEffect de change le theme
  useEffect(() => {
    if (Mode === "silver") {
      import("../silver.css")
    }
  }, [Mode]);

  return (
    <Fragment>
      <div className={Mode === "silver" ? "silver" : "naturale"}>
        <div className="Application">
          {/* <BrowserRouter> */}
          <BrowserRouter basename="pomo-technique">
          {/* <h1>{Mode }</h1> */}
            <Routes>
              <Route path="/" element={
                  <>
                    <Header
                      Switcher={(value) => SetMode(value)}
                      onSwitch={(value) => SetMode(value)}
                    />
                    <Timer />
                    <TodoList />
                    <Documentation />
                  </>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Fragment>
  );
}
