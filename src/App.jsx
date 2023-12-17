import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./components/z - homepage";
import { motion, useScroll } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Fragment>
      <div className="divOfProgress">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="progess-bar-scroll"
        />
      </div>
      <HomePage />
    </Fragment>
  );
}
   