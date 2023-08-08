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
import DynamicBlog from "./DynamicBlog/DynamicBlog";

function ReactRoutes() {
  return (
    <div className="route-component">
      <ContextAPI>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Id" element={<DynamicBlog />} />

          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/hollywood/:Id" element={<DynamicBlog />} />

          <Route path="/food" element={<Food />} />
          <Route path="/food/:Id" element={<DynamicBlog />} />

          <Route path="/fitness" element={<Fitness />} />
          <Route path="/fitness/:Id" element={<DynamicBlog />} />

          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/bollywood/:Id" element={<DynamicBlog />} />

          <Route path="/technology" element={<Technology />} />
          <Route path="/technology/:Id" element={<DynamicBlog />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </ContextAPI>
    </div>
  );
}

export default ReactRoutes;
