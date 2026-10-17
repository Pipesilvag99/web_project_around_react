import { useContext, useState } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';

export default function EditProfile(): React.JSX.Element {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  // Componentes controlados: el estado empieza con los datos actuales del usuario.
  // ?. y || '' evitan errores si los datos aún no han llegado.
  const [name, setName] = useState(currentUser?.name || '');
  const [description, setDescription] = useState(currentUser?.about || '');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
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
        className="popup__input popup__input_type_name"
        id="name-input"
        name="name"
        placeholder="Nombre"
        minLength={2}
        maxLength={40}
        required
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span className="popup__error name-input-error"></span>
      <input
        className="popup__input popup__input_type_description"
        id="description-input"
        name="description"
        placeholder="Acerca de mí"
        minLength={2}
        maxLength={200}
        required
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <span className="popup__error description-input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
