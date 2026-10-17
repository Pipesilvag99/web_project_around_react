import { useEffect, useState } from 'react';
import api from '../utils/api.ts';
import CurrentUserContext from '../contexts/CurrentUserContext.tsx';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import type { UserData, UserFormData, AvatarFormData } from '../interfaces/UserData.ts';
import type { CardData, CardFormData } from '../interfaces/CardData.ts';
import type { ModalData } from '../interfaces/ModalData.ts';

function App(): React.JSX.Element {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  // null = no hay ninguna ventana abierta
  const [popup, setPopup] = useState<ModalData | null>(null);

  // Se ejecuta UNA sola vez, al montar el componente
  useEffect(() => {
    (async () => {
      try {
        const [userData, initialCards] = await Promise.all([
          api.getUserInfo(),
          api.getInitialCards(),
        ]);
        setCurrentUser(userData);
        setCards(initialCards);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // ===== Ventanas emergentes =====
  function handleOpenPopup(modalData: ModalData): void {
    setPopup(modalData);
  }

  function handleClosePopup(): void {
    setPopup(null);
  }

  // ===== Tarjetas =====
  async function handleCardLike(card: CardData): Promise<void> {
    try {
      const updatedCard = card.isLiked
        ? await api.removeLike(card._id)
        : await api.addLike(card._id);
      // Reemplazamos solo la tarjeta que cambió
      setCards((state) =>
        state.map((item) => (item._id === card._id ? updatedCard : item)),
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardDelete(card: CardData): Promise<void> {
    try {
      await api.deleteCard(card._id);
      // Nuevo arreglo sin la tarjeta borrada
      setCards((state) => state.filter((item) => item._id !== card._id));
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit(data: CardFormData): Promise<void> {
    try {
      const newCard = await api.addCard(data);
      // La nueva tarjeta va primero
      setCards((state) => [newCard, ...state]);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  // ===== Usuario =====
  async function handleUpdateUser(data: UserFormData): Promise<void> {
    try {
      const updatedUser = await api.updateUserInfo(data);
      setCurrentUser(updatedUser);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateAvatar(data: AvatarFormData): Promise<void> {
    try {
      const updatedUser = await api.updateAvatar(data);
      setCurrentUser(updatedUser);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}
    >
      <div className="page__content">
        <Header />
        <Main
          cards={cards}
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
