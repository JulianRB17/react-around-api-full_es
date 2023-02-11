import React from 'react';
import approvedSymbol from '../images/popup-approved-logo.svg';
import rejectSymbol from '../images/popup-error-logo.svg';

export default function InfoTooltip(props) {
  const { onClose, isOpen, isAuthorized } = props;
  const popupOpenClass = isOpen ? ' popup_opened' : '';

  return (
    <section className={`popup${popupOpenClass}`}>
      <div className="popup__body">
        <button className="popup__close-btn" onClick={onClose}></button>
        <img
          src={isAuthorized ? approvedSymbol : rejectSymbol}
          alt={isAuthorized ? 'aprobado' : 'rechazado'}
          className="popup__authorization-img"
        ></img>
        <h3 className="popup__authorization-msg">
          {isAuthorized
            ? 'Success! You have now been registered.'
            : 'Oops, something went wrong! Please try again.'}
        </h3>
      </div>
    </section>
  );
}
