/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './index.css'
Signup.propTypes = {
  onSubmit: PropTypes.func,
};
Signup.defaultProps = {
  onSubmit: null,
};

function Signup({ onSubmit }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSetFullName = (e) => {
    setFullname(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSetConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
      confirm_password,
    };

    onSubmit(user);
  };

  return (
    <div className="form__container sign-up-container">
      <div className="register">
        <div className="col-1 signUp">
          <h2>Sign Up</h2>
          <span>register and enjoy the service</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullname}
              onChange={handleSetFullName}
              placeholder="fullName"
            />
            <input
              type="email"
              value={email}
              onChange={handleSetEmail}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={handleSetPassword}
              placeholder="password"
            />
            <input
              type="password"
              value={confirm_password}
              onChange={handleSetConfirmPassword}
              placeholder="confirm password"
            />
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
