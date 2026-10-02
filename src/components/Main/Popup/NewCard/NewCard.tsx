export default function NewCard(): React.JSX.Element {
  return (
    <form className="popup__form" id="new-card-form" name="new-card-form" noValidate>
      <input
        className="popup__input popup__input_type_card-name"
        id="place-name-input"
        name="place-name"
        placeholder="Título"
        minLength={2}
        maxLength={30}
        required
        type="text"
      />
      <span className="popup__error place-name-input-error"></span>
      <input
        className="popup__input popup__input_type_url"
        id="link-input"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
      />
      <span className="popup__error link-input-error"></span>
      <button className="button popup__button" type="submit">
        Crear
      </button>
    </form>
  );
}
