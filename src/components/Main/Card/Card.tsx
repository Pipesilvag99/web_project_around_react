import type { CardData, PopupConfig } from '../../../types/types.ts';
import ImagePopup from '../Popup/ImagePopup/ImagePopup';

type CardProps = {
  card: CardData;
  handleOpenPopup: (popup: PopupConfig) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { card, handleOpenPopup } = props;
  const { name, link } = card;

  // Popup sin título: así Popup sabe que es una imagen
  const imageComponent: PopupConfig = {
    children: <ImagePopup card={card} />,
  };

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className="card__like-button"
          type="button"
        />
      </div>
    </li>
  );
}
