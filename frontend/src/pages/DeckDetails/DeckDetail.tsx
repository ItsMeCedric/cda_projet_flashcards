import { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import { Deck } from "../../@types/deck";
import styles from "./DeckDetails.module.css";

const DeckDetail = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [deck, setDeck] = useState<Deck | undefined>(undefined);
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const deckId = state.deckId;

  useEffect(() => {
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}`).then((res) => setDeck(res.data));
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}/cards`).then((res) => setCards(res.data));
  }, []);

  const addCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/new-card", { state: { deckId } });
  };

  const deleteCard = (e: MouseEvent<HTMLButtonElement>, cardId: number) => {
    e.preventDefault();
    axiosInstance.delete(`/users/${user?.id}/decks/${deckId}/cards/${cardId}`).then((res) => {
      const tmpCards = cards?.filter((card) => card.id != cardId);
      setCards(tmpCards);
    });
  };

  if (deck === undefined || cards === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>{deck.name}</h2>
      <h3>{deck.subject}</h3>
      <button onClick={addCard}>Ajouter une carte au deck</button>
      <div className={styles.card_container}>
        {cards.map((card) => (
          <div>
            <p>{card.question}</p>
            <button className={styles.btn} onClick={(e) => deleteCard(e, card.id)}>
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeckDetail;
