import { useContext, useState } from 'react';
import CurrentUserContext from '../../../../../contexts/CurrentUserContext.tsx';

export default function NewCard(): React.JSX.Element {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  // Empiezan vacíos: el componente se monta de cero cada vez que se abre el popup
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
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
        className="popup__input popup__input_type_card-name"
        id="place-name-input"
        name="place-name"
        placeholder="Título"
        minLength={2}
        maxLength={30}
        required
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span className="popup__error place-name-input-error"></span>
      <input
        className="popup__input popup__input_type_url"
        id="link-input"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        value={link}
        onChange={(event) => setLink(event.target.value)}
      />
      <span className="popup__error link-input-error"></span>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
