import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/api/v1/auth/register",formdata);
    if (res.status === 200) {
      // alert(res.data.msg);
      // console.log(res);
      toast.success(res.data.msg);
      setFormdata({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
    } else {
      // alert(res.data.msg);
      // console.log(res);
      toast.error(res.data.msg);
      setFormdata({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="container-fluid w-25 card p-5 mt-5"
      >
        <h1 className="text-success text-center">Sign Up</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputname" className="form-label">
            Enter Full Name:
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="form-control"
            id="exampleInputname"
            value={formdata.name}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputemail" className="form-label">
            Enter email:
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputemail"
            value={formdata.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputpassword" className="form-label">
            Enter password:
          </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="exampleInputpassword"
            value={formdata.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputphone" className="form-label">
            Enter phone no:
          </label>
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            className="form-control"
            id="exampleInputphone"
            value={formdata.phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputaddress" className="form-label">
            Enter address:
          </label>
          <input
            onChange={handleChange}
            name="address"
            type="text"
            className="form-control"
            id="exampleInputaddress"
            value={formdata.address}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Registration;
