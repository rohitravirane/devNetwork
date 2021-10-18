import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
// import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import "./Register.css";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, name: e.target.value });
  const onChange1 = (e) => setFormData({ ...formData, email: e.target.value });
  const onChange2 = (e) =>
    setFormData({ ...formData, password: e.target.value });
  const onChange3 = (e) =>
    setFormData({ ...formData, password2: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "error");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="signup-main">
      <form id="login-form" onSubmit={(e) => onSubmit(e)}>
        <h1>Sign Up</h1>

        <div className="input email">
          <input
            type="text"
            value={name}
            onChange={(e) => onChange(e)}
            placeholder=" "
          />
          <label>Name</label>
        </div>
        <div className="input email">
          <input
            type="email"
            value={email}
            onChange={(e) => onChange1(e)}
            placeholder=" "
          />
          <label>Email</label>
        </div>

        <div className="input email">
          <input
            type="password"
            value={password}
            onChange={(e) => onChange2(e)}
            placeholder=" "
          />
          <label>Password</label>
        </div>
        <div className="input email">
          <input
            type="password"
            value={password2}
            onChange={(e) => onChange3(e)}
            placeholder=" "
          />
          <label>Confirm Password</label>
        </div>

        <button type="submit">
          <span>Register</span>
        </button>
        <p className="mt-4" style={{ fontSize: "11px", textAlign: "center" }}>
          I have an Account{" "}
          <Link style={{ color: "blue" }} to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
