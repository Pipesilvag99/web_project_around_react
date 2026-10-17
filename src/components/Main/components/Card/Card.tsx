import { useContext } from 'react';
import CurrentUserContext from '../../../../contexts/CurrentUserContext.tsx';
import type { CardData } from '../../../../interfaces/CardData.ts';
import type { ModalData } from '../../../../interfaces/ModalData.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup';
import RemoveCard from '../Popup/RemoveCard/RemoveCard';

type CardProps = {
  card: CardData;
  onOpenPopup: (modalData: ModalData) => void;
  onCardLike: (card: CardData) => void;
  onCardDelete: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { card, onOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = card;
  const { currentUser } = useContext(CurrentUserContext);

  // La papelera solo aparece en las tarjetas del usuario actual
  const isOwnCard = card.owner === currentUser?._id;

  // Popup sin título: así Popup sabe que es una imagen
  const imagePopup: ModalData = {
    children: <ImagePopup card={card} />,
  };

  const removeCardPopup: ModalData = {
    title: '¿Estás seguro/a?',
    children: <RemoveCard card={card} onCardDelete={onCardDelete} />,
  };

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
  }`;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onOpenPopup(imagePopup)}
      />
      {isOwnCard && (
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
          onClick={() => onOpenPopup(removeCardPopup)}
        />
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className={cardLikeButtonClassName}
          type="button"
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}
