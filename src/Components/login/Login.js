import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo2.png";
import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="loginContainer">
      <div className="row">
        <div className="leftSection col-md-3">
          <div className="IntroText">
            <h3>Welcome To TO-DO </h3>
            <p>Your Favorite Distenation for task Organization</p>
          </div>
        </div>

        {/* Left Section ends Here */}

        <div className="col-md-1">
          <img
            className="logo"
            src={logo}
            alt="ToDo Logo"
            width="80px"
            height="80px"
          ></img>
        </div>

        {/* Middle Section Ends here */}

        <div className="rightSection col-md-8">
          <h3 className="logintitle">Login</h3>

          {/* -------------------------------------------------  */}

          <form className="loginForm">
            <FormControl
              className="FormInput"
              sx={{ m: 1, width: "25ch" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Example@domain.com
              </InputLabel>
              <FilledInput
                value={values.email}
                onChange={handleChange("email")}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <FormControl
              className="FormInput"
              sx={{ m: 1, width: "25ch" }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
            </FormGroup>
            <button type="submit" className="btn btn-primary formbtns">
              Login
            </button>
            <button type="submit" className="btn btn-outline-primary formbtns">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
