import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const {
    cardId,
    cardOwnerId,
    link,
    cardName,
    cardLikes,
    onCardClick,
    onCardLike,
    onCardDelete,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = cardOwnerId === currentUser._id;
  const cardDeleteButtonStyle = isOwn
    ? { display: 'block' }
    : { display: 'none' };
  const isLiked = cardLikes.some((i) => i === currentUser._id);
  const cardLikeButtonClassName = isLiked
    ? 'cards__like-btn cards__like-btn_active'
    : 'cards__like-btn';

  return (
    <div className="cards__card-container" id={cardId}>
      <button
        className="cards__trash-btn"
        onClick={onCardDelete}
        style={cardDeleteButtonStyle}
      ></button>
      <img
        className="cards__img"
        src={link}
        alt={cardName}
        onClick={onCardClick}
      />
      <div className="cards__footer">
        <h2 className="cards__name">{cardName}</h2>
        <div className="cards__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={onCardLike}
          ></button>
          <p className="cards__like-number">{cardLikes.length}</p>
        </div>
      </div>
    </div>
  );
}
