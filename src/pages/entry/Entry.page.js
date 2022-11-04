import React, { useState } from "react";
import { Login } from "../../components/login/Login";
import { ResetPassword } from "../../components/password reset/PasswordReset";

import "./entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    // console.log(name, value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill the fields");
    }
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please fill the field ");
    }
    console.log(email);
  };
  const formSwitch = (formtype) => {
    setFormLoad(formtype);
  };
  return (
    <div>
      <div className="entry-page bg-info">
        <div className="left"></div>
        <div className="right">
          <div className="jumbotron">
            {formLoad === "login" && (
              <Login
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitch}
                email={email}
                pass={password}
              />
            )}
            {formLoad === "reset" && (
              <ResetPassword
                handleOnChange={handleOnChange}
                handleOnResetSubmit={handleOnResetSubmit}
                formSwitcher={formSwitch}
                email={email}
              ></ResetPassword>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
