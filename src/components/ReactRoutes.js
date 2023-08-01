import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Hollywood from "./Hollywood/Hollywood";
import Food from "./Food/Food";
import Fitness from "./Fitness/Fitness";
import Error from "./Error";
import Bollywood from "./Bollywood/Bollywood";
import Technology from "./Technology/Technology";
import ContextAPI from "./ContextAPI";
import "./GlobalNavComp.css";

function ReactRoutes() {
  return (
    <div className="route-component">
      <ContextAPI>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/food" element={<Food />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/technology" element={<Technology />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </ContextAPI>
    </div>
  );
}

export default ReactRoutes;
