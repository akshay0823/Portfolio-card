import React from "react";
import { NavLink } from "react-router-dom";

const Comman = (props) => {
  return (
    <>
      <section className="header d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 order-2 order-lg-1 mt-5 d-flex flex-column justify-content-center">
                  <h1>
                    {props.head1}
                    <span style={{ color: "red" }}>{props.head1span}</span>
                  </h1>
                  <h6>{props.head2}</h6>
                  <NavLink
                    to={props.visit}
                    className="btn btn-info btn_contact"
                  >
                    {props.btn}
                  </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 mt-5 d-flex justify-content-center">
                  <img
                    src={props.img}
                    alt=""
                    style={{ width: "350px", height: "350px" }}
                    className="bouncing_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comman;
