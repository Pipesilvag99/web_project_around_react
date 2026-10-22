import { useContext, useState } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';
import useFormValidation from '../../../../../utils/useFormValidation.ts';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  // Empiezan vacíos: el componente se monta de cero cada vez que se abre el popup
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  // Empieza como inválido porque los campos están vacíos
  const { errors, isValid, validateField, validateForm } = useFormValidation(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Si algún campo no cumple sus reglas, no se envía nada a la API
    if (!validateForm(event.currentTarget)) {
      return;
    }

    handleAddPlaceSubmit({ name, link });
  }

  return (
    <form
      className="popup__form"
      id="new-card-form"
      name="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_card-name ${
          errors['place-name'] ? 'popup__input_type_error' : ''
        }`}
        id="place-name-input"
        name="place-name"
        placeholder="Título"
        minLength={2}
        maxLength={30}
        required
        type="text"
        value={name}
        aria-invalid={Boolean(errors['place-name'])}
        aria-describedby="place-name-input-error"
        onChange={(event) => {
          setName(event.target.value);
          validateField(event.target);
        }}
      />
      <span
        className={`popup__error ${errors['place-name'] ? 'popup__error_visible' : ''}`}
        id="place-name-input-error"
      >
        {errors['place-name']}
      </span>
      <input
        className={`popup__input popup__input_type_url ${
          errors.link ? 'popup__input_type_error' : ''
        }`}
        id="link-input"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        value={link}
        aria-invalid={Boolean(errors.link)}
        aria-describedby="link-input-error"
        onChange={(event) => {
          setLink(event.target.value);
          validateField(event.target);
        }}
      />
      <span
        className={`popup__error ${errors.link ? 'popup__error_visible' : ''}`}
        id="link-input-error"
      >
        {errors.link}
      </span>
      <button
        className={`button popup__button ${isValid ? '' : 'popup__button_disabled'}`}
        type="submit"
        disabled={!isValid}
      >
        Crear
      </button>
    </form>
  );
}
