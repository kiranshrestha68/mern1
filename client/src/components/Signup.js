import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const { name, email, work, phone, password, cpassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3 px-5">
      <form className="mx-4">
        <div class="form-group mb-2">
          <label for="name">Your Name</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder=""
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group mb-2">
          <label for="exampleInputEmail1"> Your Email</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group mb-2">
          <label for="phone">Phone nUmber</label>
          <input
            type=""
            class="form-control"
            id="exampleInputEmail1"
            placeholder=""
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group mb-2">
          <label for="work">Profession</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
            name="work"
            value={work}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder=""
            name="cpassword"
            value={cpassword}
            onChange={(e) => onInputChange(e)}
          />
        </div>

        <button type="submit" class="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
