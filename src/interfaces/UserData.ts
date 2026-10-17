// Datos del usuario tal como los devuelve la API
export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

// Datos que enviamos desde el formulario de editar perfil
export interface UserFormData {
  name: string;
  about: string;
}

// Datos que enviamos desde el formulario de cambiar avatar
export interface AvatarFormData {
  avatar: string;
}
