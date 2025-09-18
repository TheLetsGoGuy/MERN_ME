import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        formdata
      );
      console.log(res);
      if (res.status === 200) {
        toast.success(res.data.msg);
        setFormdata({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log();
      toast.error(error.response.data.msg);
      setFormdata({
        email: "",
        password: "",
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
        <h1 className="text-success text-center">Login</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputemail" className="form-label">
            Enter email:
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
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
            placeholder="Enter password"
            className="form-control"
            id="exampleInputpassword"
            value={formdata.password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
