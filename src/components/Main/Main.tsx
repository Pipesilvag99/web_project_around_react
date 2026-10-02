import avatar from '../../images/avatar.jpg';

function Main(): React.JSX.Element {
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-wrapper">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            className="profile__avatar-overlay"
            type="button"
            aria-label="Cambiar foto de perfil"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
          ></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list"></ul>
      </section>
    </main>
  );
}

export default Main;
