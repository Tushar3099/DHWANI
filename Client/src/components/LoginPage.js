import React from "react";
import { Link } from "react-router-dom";

const initialFormData = Object.freeze({
  fullname: "",
  password: ""
});

const LoginPage = () => {
  const [formData, setFormData] = React.useState(initialFormData);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        className="forminput"
        type="text"
        placeholder="Username"
        name="fullname"
        value={formData.username}
        onChange={handleInputChange}
      />

      <label for="password">Password</label>
      <input
        className="forminput"
        type="password"
        name="password"
        placeholder="Password..."
        value={formData.password}
        onChange={handleInputChange}
      />
      <div className="buttons">
        <button className="bt" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/signup">
          <button className="bt">New User</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
