export default function EditProfile(): React.JSX.Element {
  return (
    <form className="popup__form" id="edit-profile-form" name="edit-profile-form" noValidate>
      <input
        className="popup__input popup__input_type_name"
        id="name-input"
        name="name"
        placeholder="Nombre"
        minLength={2}
        maxLength={40}
        required
        type="text"
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
      />
      <span className="popup__error description-input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
