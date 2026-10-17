// Datos de una tarjeta tal como los devuelve la API
export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

// Datos que enviamos desde el formulario de nuevo lugar
export interface CardFormData {
  name: string;
  link: string;
}
