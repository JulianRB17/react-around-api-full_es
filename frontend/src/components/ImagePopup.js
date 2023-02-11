import React from "react";

export default function ImagePopup(props) {
  const { isOpen, onClose, imagePopup } = props;
  const popupClasses = isOpen ? "popup popup_opened" : "popup";

  return (
    <section className={popupClasses} id="popup-pic">
      <div className="popup__overlay"></div>
      <div className="popup__pic-container">
        <button className="popup__close-btn" onClick={onClose}></button>
        <img
          className="popup__pic"
          alt={imagePopup.name}
          src={`${imagePopup.link}`}
        />
        <p className="popup__pic-name">{imagePopup.name}</p>
      </div>
    </section>
  );
}
