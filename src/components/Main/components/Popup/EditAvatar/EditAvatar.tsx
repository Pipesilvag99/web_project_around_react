import { useContext, useRef } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';

export default function EditAvatar(): React.JSX.Element {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  // Componente no controlado: leemos el valor directo del input al enviar
  const avatarRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
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
        className="popup__input popup__input_type_url"
        id="avatar-input"
        name="avatar"
        placeholder="Enlace a la nueva foto de perfil"
        required
        type="url"
        ref={avatarRef}
      />
      <span className="popup__error avatar-input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
