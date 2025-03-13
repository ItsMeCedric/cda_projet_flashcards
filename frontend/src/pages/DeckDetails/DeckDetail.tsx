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
  }, [navigate, user?.id, state.deckId]);

  useEffect(() => {
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}/cards`).then((res) => setCards(res.data));
  }, [navigate, user?.id, state.deckId]);

  if (deck === undefined || cards === undefined) {
    return <p>Loading...</p>;
  }

  const addCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/new-card", { state: { deckId } });
  };

  const makePublic = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}/publish`).then((res) => {
      setDeck((deck) => {
        if (deck === undefined) return undefined;
        return { ...deck, storeId: res.data.storeId };
      });
    });
  };

  const deleteDeck = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    axiosInstance.delete(`/users/${user?.id}/decks/${deckId}`).then(() => {
      navigate("/account", { replace: true });
    });
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.spacer}></div>
          <div className={styles.title}>
            <h2>{deck.name}</h2>
            <h3>{deck.subject}</h3>
          </div>

          <div className={styles.all_btn}>
            <a className={styles.btn} onClick={addCard}>
              Ajouter une carte au deck
            </a>
            <a className={styles.btn} onClick={makePublic}>
              {deck.storeId ? "Rendre privé" : "Rendre public"}
            </a>
            <a className={styles.btn} onClick={deleteDeck}>
              Supprimer
            </a>
          </div>
        </div>
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
