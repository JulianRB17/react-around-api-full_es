import React from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {
  const { onEmailChange, onPasswordChange, onRegister } = props;

  function handleRegistration(e) {
    e.preventDefault();
    onRegister();
  }

  return (
    <div className="authorization-form__container">
      <h1 className="authorization-form__title">Sign up</h1>
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
        <button
          className="authorization-form__btn"
          onClick={handleRegistration}
        >
          Sign up
        </button>
        <Link className="authorization-form__footer" to="/signin">
          Alredy a member? Log in here!
        </Link>
      </form>
    </div>
  );
}
