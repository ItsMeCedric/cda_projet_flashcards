import { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import { Deck } from "../../@types/deck";

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

  if (deck === undefined || cards === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>{deck.name}</h2>
      <h3>{deck.subject}</h3>
      <button onClick={addCard}>Ajouter une carte au deck</button>
      {cards.map((card) => (
        <p>{card.question}</p>
      ))}
    </>
  );
};

export default DeckDetail;
