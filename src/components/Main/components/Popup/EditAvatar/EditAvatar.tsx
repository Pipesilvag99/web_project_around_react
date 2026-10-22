import { useContext, useRef } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';
import useFormValidation from '../../../../../utils/useFormValidation.ts';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  // Componente no controlado: leemos el valor directo del input al enviar
  const avatarRef = useRef<HTMLInputElement>(null);

  // Empieza como inválido porque el campo está vacío
  const { errors, isValid, validateField, validateForm } = useFormValidation(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Si el enlace no es válido, no se envía nada a la API
    if (!validateForm(event.currentTarget)) {
      return;
    }

    // La ref empieza en null: comprobamos que el input exista antes de leerlo
    if (avatarRef.current) {
      handleUpdateAvatar({ avatar: avatarRef.current.value });
    }
  }

  return (
    <form
      className="popup__form"
      id="avatar-form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className={`popup__input popup__input_type_url ${
          errors.avatar ? 'popup__input_type_error' : ''
        }`}
        id="avatar-input"
        name="avatar"
        placeholder="Enlace a la nueva foto de perfil"
        required
        type="url"
        ref={avatarRef}
        aria-invalid={Boolean(errors.avatar)}
        aria-describedby="avatar-input-error"
        onChange={(event) => validateField(event.target)}
      />
      <span
        className={`popup__error ${errors.avatar ? 'popup__error_visible' : ''}`}
        id="avatar-input-error"
      >
        {errors.avatar}
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
