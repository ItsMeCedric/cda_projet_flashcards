import { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import { Deck } from "../../@types/deck";
import styles from "./DeckDetails.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

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

  const deleteDeck = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axiosInstance.delete(`/users/${user?.id}/decks/${deckId}`).then(() => {
      navigate("/account", { replace: true });
    });
  };

  const addCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/new-card", { state: { deckId } });
  };

  if (deck === undefined || cards === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h2>{deck.name}</h2>
          <h3>{deck.subject}</h3>
          <button className={styles.btn} onClick={deleteDeck}>
            x
          </button>
        </div>
        <button className={styles.btn} onClick={addCard}>
          Ajouter une carte au deck
        </button>
        <div className={styles.cards_container}>
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeckDetail;
