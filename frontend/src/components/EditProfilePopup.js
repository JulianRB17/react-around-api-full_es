import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const {
    onClose,
    isOpen,
    onUpdateUser,
    onUserNameChange,
    onUserDescriptionChange,
    setUserName,
    setUserDescription,
    name,
    about,
  } = props;

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser, setUserName, setUserDescription]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm
      title="Editar Perfil"
      submitText="Guardar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      inputs={[
        {
          type: 'text',
          placeholder: 'Nombre',
          name: 'name',
          id: 'popup__input_name',
          minLength: '2',
          maxLength: '40',
          value: name || '',
          onChange: onUserNameChange,
        },
        {
          type: 'text',
          placeholder: 'Acerca de',
          name: 'about',
          id: 'popup__input_about-me',
          minLength: '2',
          maxLength: '200',
          value: about || '',
          onChange: onUserDescriptionChange,
        },
      ]}
    />
  );
}
