import type { CardData } from '../../../../../interfaces/CardData.ts';

type RemoveCardProps = {
  card: CardData;
  onCardDelete: (card: CardData) => void;
};

export default function RemoveCard(props: RemoveCardProps): React.JSX.Element {
  const { card, onCardDelete } = props;

  // Solo el controlador de submit vive aquí; el borrado real está en App
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onCardDelete(card);
  }

  return (
    <form
      className="popup__form"
      id="remove-card-form"
      name="remove-card-form"
      onSubmit={handleSubmit}
    >
      <button className="button popup__button" type="submit">
        Sí
      </button>
    </form>
  );
}
