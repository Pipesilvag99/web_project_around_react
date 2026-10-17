import { useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.tsx';
import type { CardData } from '../../interfaces/CardData.ts';
import type { ModalData } from '../../interfaces/ModalData.ts';
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/NewCard/NewCard';
import EditProfile from './components/Popup/EditProfile/EditProfile';
import EditAvatar from './components/Popup/EditAvatar/EditAvatar';
import Card from './components/Card/Card';

type MainProps = {
  cards: CardData[];
  popup: ModalData | null;
  onOpenPopup: (modalData: ModalData) => void;
  onClosePopup: () => void;
  onCardLike: (card: CardData) => void;
  onCardDelete: (card: CardData) => void;
};

export default function Main(props: MainProps): React.JSX.Element {
  const { cards, popup, onOpenPopup, onClosePopup, onCardLike, onCardDelete } = props;
  const { currentUser } = useContext(CurrentUserContext);

  const newCardPopup: ModalData = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };

  const editProfilePopup: ModalData = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };

  const editAvatarPopup: ModalData = {
    title: 'Cambiar foto de perfil',
    children: <EditAvatar />,
  };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-wrapper">
          <img
            className="profile__image"
            src={currentUser?.avatar}
            alt={currentUser?.name}
          />
          <button
            className="profile__avatar-overlay"
            type="button"
            aria-label="Cambiar foto de perfil"
            onClick={() => onOpenPopup(editAvatarPopup)}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => onOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => onOpenPopup(newCardPopup)}
        ></button>
      </section>
      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onOpenPopup={onOpenPopup}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title} isOpen={popup !== null}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
