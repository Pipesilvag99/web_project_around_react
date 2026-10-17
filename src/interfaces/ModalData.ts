// Contenido de la ventana emergente abierta.
// title es opcional: si no hay título, Popup sabe que es una imagen.
export interface ModalData {
  title?: string;
  children: React.ReactNode;
}
