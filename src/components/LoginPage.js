import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginbox">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        className="forminput"
        type="text"
        placeholder="Username"
        name="username"
      />

      <label for="password">Password</label>
      <input
        className="forminput"
        type="password"
        name="password"
        placeholder="********"
      />
      <div className="buttons">
        <button className="bt">Login</button>
        <Link to="/signup">
          <button className="bt">New User</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
