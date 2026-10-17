type PopupProps = {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

export default function Popup(props: PopupProps): React.JSX.Element {
  // Los hijos (children) son el contenido de la ventana emergente
  const { title, children, onClose, isOpen } = props;

  return (
    <div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div
        className={`popup__content ${
          !title ? 'popup__content_content_image' : ''
        }`}
      >
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        />

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}
