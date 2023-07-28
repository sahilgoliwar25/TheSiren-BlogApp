import React, { useContext } from "react";
import { Store } from "../ContextAPI";
import "./Home.css";

const Home = () => {
  const [DData] = useContext(Store);
  console.log(DData);
  return (
    <>
      <div>
        Home
        <div className="top-content">
          <div className="card1 card">
            <img
              src="https://c.ndtvimg.com/2022-12/7oc6jflg_running_650x400_28_December_22.jpg?q=50"
              alt="img Not Found"
            />
            <div className="textContent">
            Adding These 8 Habits To Your Routine Could Add Decades To Your Life
            </div>
          </div>
          <div className="card-row">
            <div className="card2 card">
            <img
              src="https://c.ndtvimg.com/2023-07/17628jno_vijay-_625x300_27_July_23.jpg"
              alt="img Not Found"
            />
            <div className="textContent">
            Kaalkoot Review: Vijay Varma Leads The Charge In Understated Police Procedural
            </div>
            </div>
            <div className="card3 card">
            <img
              src="https://i.gadgets360cdn.com/large/samsung_galaxy_watch_6_1690424312915.jpg?downsize=950:*"
              alt="img Not Found"
            />
            <div className="textContent">
              Samsung Galaxy Watch 6, Galaxy Watch 6 Classic Price in India
              Announced: Details
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
