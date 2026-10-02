export default function EditAvatar(): React.JSX.Element {
  return (
    <form className="popup__form" id="avatar-form" name="avatar-form" noValidate>
      <input
        className="popup__input popup__input_type_url"
        id="avatar-input"
        name="avatar"
        placeholder="Enlace a la nueva foto de perfil"
        required
        type="url"
      />
      <span className="popup__error avatar-input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
