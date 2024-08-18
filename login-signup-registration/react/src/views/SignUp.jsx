import React, { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contextProvider/ContextProvider";

export default function Login() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient
      .post("/signup", payload)
      .then((data) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && reaponse.status == 422) {
          console.log(reaponse.data.errors);
        }
      });
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">SignUp for free</h1>
          <input ref={nameRef} placeholder="Full Name" />
          <input ref={emailRef} type="email" placeholder="Email Address" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <input
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Password Confirmation"
          />
          <button className="btn btn-block">SignUp</button>
          <p className="message">
            Already Registered? <link to="/login">Sign in</link>
          </p>
        </form>
      </div>
    </div>
  );
}
