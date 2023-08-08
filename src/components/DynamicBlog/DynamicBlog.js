import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import { useParams } from "react-router-dom";
import "./DynamicBlog.css";

const DynamicBlog = () => {
  const [DData] = useContext(Store);
  const stuid = useParams().Id;
  console.log(stuid);
  return (
    <div className="blog-parent">
      {DData.filter((item) => item.id === stuid).map((data, index) => {
        return (
          <div className="blogDetails" key={index}>
            <p className="blogHead">{data.heading}</p>
            <p>
              <span>{data.type}</span> / {data.date}
            </p>
            <img className="blogImg" src={data.image} alt="Not Found" />
            <div>
              <p>{data.heading}</p>
              <p>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicBlog;
