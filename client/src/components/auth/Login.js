import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Login.css";
import { is } from "date-fns/locale";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, email: e.target.value });
  const onChange1 = (e) =>
    setFormData({ ...formData, password: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-main">
      <form id="login-form" onSubmit={(e) => onSubmit(e)}>
        <h1>Sign In</h1>

        <div className="input email">
          <input
            type="text"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder=" "
          />
          <label>Email</label>
        </div>

        <div className="input email">
          <input
            type="password"
            value={password}
            onChange={(e) => onChange1(e)}
            placeholder=" "
          />
          <label>Password</label>
        </div>

        <button type="submit">
          <span>Login</span>
        </button>
        <p className="mt-4" style={{ fontSize: "11px", textAlign: "center" }}>
          Don't have an Account?{" "}
          <Link style={{ color: "blue" }} to="/register">
            SignUp
          </Link>
        </p>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
