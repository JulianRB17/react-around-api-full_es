import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Main(props) {
  const {
    onEditAvatarClick,
    onAddPlaceClick,
    onEditProfileClick,
    renderCards,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div
          className="profile__pic"
          onClick={onEditAvatarClick}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <div className="profile__overlay">
            <div className="profile__overlay-icon"></div>
          </div>
        </div>
        <div className="profile__text-container">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-btn"
            onClick={onEditProfileClick}
          ></button>
          <p className="profile__about-me">{currentUser.about}</p>
        </div>
        <button className="profile__add-btn" onClick={onAddPlaceClick}></button>
      </section>

      <section className="cards">{renderCards()}</section>
    </>
  );
}
