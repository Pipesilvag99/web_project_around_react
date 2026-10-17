import type { UserData, UserFormData, AvatarFormData } from '../interfaces/UserData.ts';
import type { CardData, CardFormData } from '../interfaces/CardData.ts';

type ApiOptions = {
  baseUrl: string;
  headers: Record<string, string>;
};

class Api {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(options: ApiOptions) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  // Centraliza fetch y el manejo de errores.
  // <T> es el tipo de dato que esperamos que devuelva cada petición.
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: this.headers,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  getUserInfo(): Promise<UserData> {
    return this.request<UserData>('/users/me');
  }

  getInitialCards(): Promise<CardData[]> {
    return this.request<CardData[]>('/cards');
  }

  updateUserInfo(data: UserFormData): Promise<UserData> {
    return this.request<UserData>('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  updateAvatar(data: AvatarFormData): Promise<UserData> {
    return this.request<UserData>('/users/me/avatar', {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  addCard(data: CardFormData): Promise<CardData> {
    return this.request<CardData>('/cards', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId: string): Promise<{ message: string }> {
    return this.request<{ message: string }>(`/cards/${cardId}`, {
      method: 'DELETE',
    });
  }

  addLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/${cardId}/likes`, {
      method: 'PUT',
    });
  }

  removeLike(cardId: string): Promise<CardData> {
    return this.request<CardData>(`/cards/${cardId}/likes`, {
      method: 'DELETE',
    });
  }
}

// Reemplaza TU_TOKEN por tu token real (el mismo que usaste en web_project_around_es)
const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1',
  headers: {
    authorization: '447a7f8b-f6a6-4851-878b-f60ce03e4598',
    'Content-Type': 'application/json',
  },
});

export default api;
