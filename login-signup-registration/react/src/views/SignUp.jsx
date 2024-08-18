import React from 'react'

export default function Login() {
  const onSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">
            SignUp for free
          </h1>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Password Confirmation" />
          <button className="btn btn-block">SignUp</button>
          <p className="message">
            Already Registered? <link to = "/login">Sign in</link>
          </p>
        </form>
      </div>
    </div>
  );
}
