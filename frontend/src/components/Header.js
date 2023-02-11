import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { isAuthorized, email, onLogout } = props;
  const classes = isAuthorized
    ? 'header__email'
    : 'header__email header__email_hidden';

  function linkText() {
    if (window.location.pathname === '/signin') {
      return 'Register';
    }
    if (window.location.pathname === '/signup') {
      return 'Log in';
    }
    if (window.location.pathname === '/') {
      return 'Log out';
    }
  }

  function linkPath() {
    if (window.location.pathname === '/signin') {
      return '/signup';
    }
    if (window.location.pathname === '/signup') {
      return '/signin';
    }
    if (window.location.pathname === '/') {
      return '/signin';
    }
  }

  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={logo} />
      <p className={classes}>{email}</p>
      <Link to={linkPath()} onClick={onLogout} className="header__link">
        {linkText()}
      </Link>
      <div className="header__line-break" />
    </header>
  );
}
