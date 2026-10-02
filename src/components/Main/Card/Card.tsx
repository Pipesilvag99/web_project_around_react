import type { CardData } from '../../../types/types.ts';

type CardProps = {
  card: CardData;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { name, link } = props.card;

  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} />
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
