/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Signin({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    onSubmit(user);
  };

  return (
    <div className="form__container sign-in-container">
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
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
            <button className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Signin.propTypes = {};

export default Signin;
