import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import "../GlobalNavComp.css";

const Bollywood = () => {
  const [DData] = useContext(Store);
  let count = 0;
  return (
    <div className="nav-comp-body">
      <div className="context-comp">
        <div className="ele-container">
          <p className="comp-head">Bollywood</p>
          {DData.filter((item) => item.cat === "Bollywood").map(
            (data, index) => {
              return (
                <div className="ele-parent" key={index}>
                  <div className="elements">
                    <img src={data.image} alt="Not Found" />
                    <div>
                      <p className="ele-head">{data.heading}</p>
                      <p className="ele-desc">{data.description}</p>
                      <p className="ele-type">
                        <span>{data.type}</span> / {data.date}
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            }
          )}
        </div>
        <div className="top-posts-container">
          <p className="comp-head">Top Posts</p>
          {DData.filter((item) => item.cat === "Bollywood")
            .reverse()
            .map((data, index) => {
              if (count < 4) {
                count++;
                return (
                  <div className="post-parent" key={index}>
                    <div className="post-elements elements" id={`ele` + count}>
                      <img src={data.image} alt="Not Found" />
                      <div>
                        <p className="ele-head">{data.heading}</p>
                        <p className="ele-type">
                          <span>{data.type}</span> / {data.date}
                        </p>
                      </div>
                      <div className="post-rank">{count}</div>
                    </div>
                    <hr />
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default Bollywood;
