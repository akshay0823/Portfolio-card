import React from "react";
import "./App.css";
import web from "./img/view-3d-boy-using-laptop.jpg";
import Comman from "./Comman";
const Home = () => {
  return (
    <>
      <Comman
        head1="Groww your Business with"
        head1span="Techno-fy"
        head2=" We develop some Amazing website with world class developer"
        btn="Contact US"
        visit="/contact"
        img={web}
      />
    </>
  );
};

export default Home;
