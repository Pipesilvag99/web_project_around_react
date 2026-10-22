import { useContext, useState } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';
import useFormValidation from '../../../../../utils/useFormValidation.ts';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  // Componentes controlados: el estado empieza con los datos actuales del usuario.
  // ?. y || '' evitan errores si los datos aún no han llegado.
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  // Empieza como válido porque los campos llegan llenos con datos del servidor
  const { errors, isValid, validateField, validateForm } = useFormValidation(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Si algún campo no cumple sus reglas, no se envía nada a la API
    if (!validateForm(event.currentTarget)) {
      return;
    }

    handleUpdateUser({ name, about: description });
  }

  return (
    <form
      className="popup__form"
      id="edit-profile-form"
      name="edit-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_name ${
          errors.name ? 'popup__input_type_error' : ''
        }`}
        id="name-input"
        name="name"
        placeholder="Nombre"
        minLength={2}
        maxLength={40}
        required
        type="text"
        value={name}
        aria-invalid={Boolean(errors.name)}
        aria-describedby="name-input-error"
        onChange={(event) => {
          setName(event.target.value);
          validateField(event.target);
        }}
      />
      <span
        className={`popup__error ${errors.name ? 'popup__error_visible' : ''}`}
        id="name-input-error"
      >
        {errors.name}
      </span>
      <input
        className={`popup__input popup__input_type_description ${
          errors.description ? 'popup__input_type_error' : ''
        }`}
        id="description-input"
        name="description"
        placeholder="Acerca de mí"
        minLength={2}
        maxLength={200}
        required
        type="text"
        value={description}
        aria-invalid={Boolean(errors.description)}
        aria-describedby="description-input-error"
        onChange={(event) => {
          setDescription(event.target.value);
          validateField(event.target);
        }}
      />
      <span
        className={`popup__error ${errors.description ? 'popup__error_visible' : ''}`}
        id="description-input-error"
      >
        {errors.description}
      </span>
      <button
        className={`button popup__button ${isValid ? '' : 'popup__button_disabled'}`}
        type="submit"
        disabled={!isValid}
      >
        Guardar
      </button>
    </form>
  );
}
