import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const eventdata = (event) => {
    const { name, value } = event.target;
    setData((olddata) => {
      return {
        ...olddata,
        [name]: value,
      };
    });
  };

  const submitdata = (event) => {
    event.preventDefault();
    alert(`Name:${data.name} Email :${data.email} Number ${data.number}`);
    setData({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <>
      <div className="col-md-6 col-10 mx-auto">
        <h3 className="text-center">Contact US</h3>
        <form onSubmit={submitdata}>
          <div className="mb-3">
            <label for="name" className="form-label mt-3">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              placeholder="Enter your Name"
              onChange={eventdata}
              autoComplete="off"
            />
            <label for="email" className="form-label mt-3">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              placeholder="Enter your E-mail ID"
              onChange={eventdata}
              autoComplete="off"
            />
            <label for="number" className="form-label mt-3">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              name="number"
              value={data.number}
              placeholder="Enter your Phone Number"
              onChange={eventdata}
              autoComplete="off"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
