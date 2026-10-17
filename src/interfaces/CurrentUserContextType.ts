import type { UserData, UserFormData, AvatarFormData } from './UserData.ts';
import type { CardFormData } from './CardData.ts';

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (data: UserFormData) => Promise<void>;
  handleUpdateAvatar: (data: AvatarFormData) => Promise<void>;
  handleAddPlaceSubmit: (data: CardFormData) => Promise<void>;
}
