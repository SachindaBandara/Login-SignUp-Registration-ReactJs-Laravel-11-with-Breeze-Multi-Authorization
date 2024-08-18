import React from "react";

export default function Login() {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">
            Login into your account
          </h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <link to = "/signup">Create an account</link>
          </p>
        </form>
      </div>
    </div>
  );
}
