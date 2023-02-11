import React from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const { onEmailChange, onPasswordChange, onLogin } = props;

  function handleLogin(e) {
    e.preventDefault();
    onLogin();
  }

  return (
    <div className="authorization-form__container">
      <h1 className="authorization-form__title">Log in</h1>
      <form className="authorization-form__form">
        <input
          className="authorization-form__input"
          type="email"
          placeholder="Email"
          onChange={onEmailChange}
        ></input>
        <input
          className="authorization-form__input"
          type="password"
          placeholder="Password"
          onChange={onPasswordChange}
        ></input>
        <button className="authorization-form__btn" onClick={handleLogin}>
          Log in
        </button>
        <Link className="authorization-form__footer" to="/signup">
          Not a member yet? Sign up here!
        </Link>
      </form>
    </div>
  );
}
