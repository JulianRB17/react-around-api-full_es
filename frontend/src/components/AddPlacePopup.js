import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup(props) {
  const {
    isOpen,
    onClose,
    onAddPlaceSubmit,
    onNewPlaceCaptionChange,
    onNewPlaceChange,
    newPlace,
    newPlaceCaption,
    setNewPlace,
    setNewPlaceCaption,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ newPlaceCaption, newPlace });
    setNewPlace('');
    setNewPlaceCaption('');
  }

  return (
    <PopupWithForm
      title="Nuevo lugar"
      submitText="Guardar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      inputs={[
        {
          type: 'text',
          placeholder: 'Título',
          name: 'newPlaceCaption',
          id: 'popup__input_new-place-title',
          minLength: '2',
          maxLength: '30',
          onChange: onNewPlaceCaptionChange,
          value: newPlaceCaption,
        },
        {
          type: 'url',
          placeholder: 'Enlace a la imagen',
          name: 'newPlace',
          id: 'popup__input_new-place-pic',
          onChange: onNewPlaceChange,
          value: newPlace,
        },
      ]}
    />
  );
}
