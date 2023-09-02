import React from "react";
import Comman from "./Comman";
import { NavLink } from "react-router-dom";
import computer from "./img/clement-helardot-95YRwf6CNw8-unsplash.jpg";
import cardData from "./APIpage";
import Card from "./Card";

const About = () => {
  return (
    <>
      <div className="my-2">
        <h3 className="text-center">About US</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {cardData.map((ele, ind) => {
                return (
                  <Card key={ind} id={ele.id} img={ele.img} title={ele.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
