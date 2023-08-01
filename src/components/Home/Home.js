import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import "./Home.css";

const Home = () => {
  let count = 0;
  const [DData] = useContext(Store);
  console.log(DData[0]);
  const x = Math.floor(Math.random() * 15);
  return (
    <>
      <div>
        <div className="top-content">
          <div className="card1 card">
            <img src={DData[x].image} alt="img Not Found" />
            <div className="textContent">
              {DData[x].heading}
              <br />

              <div className="typedate">
                <span className="typebold">{DData[x].type}</span> /{" "}
                {DData[x].date}
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card2 card">
              <img src={DData[x + 1].image} alt="img Not Found" />
              <div className="textContent">
                {DData[x + 1].heading}
                <br />
                <div className="typedate">
                  <span className="typebold">{DData[x + 1].type}</span> /{" "}
                  {DData[x + 1].date}
                </div>
              </div>
            </div>
            <div className="card3 card">
              <img src={DData[x + 2].image} alt="img Not Found" />
              <div className="textContent">
                {DData[x + 2].heading}
                <br />
                <div className="typedate">
                  <span className="typebold">{DData[x + 2].type}</span> /{" "}
                  {DData[x + 2].date}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="latest-content containers-home">
          <p className="the-latest">The Latest</p>
          <div className="latest-post">
            {DData.map((data, index) => {
              if (count < 3) {
                count++;
                return (
                  <div key={index}>
                    <div className="latest-content-display">
                      <img src={data.image} alt="Not Found" />
                      <div className="latest-content-info">
                        <p className="latest-content-heading">{data.heading}</p>
                        <p className="latest-content-desc">
                          {data.description}
                        </p>
                        <p className="latest-content-date">
                          <span className="latest-content-date-bold">
                            {data.type}
                          </span>{" "}
                          / {data.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="latest-content containers-home">
          <p className="the-latest">Latest Articles</p>
        </div>
      </div>
      {/* {data.description.split("\n").map((str) => (
                  <p>{str}</p>
                ))} */}
    </>
  );
};

export default Home;
