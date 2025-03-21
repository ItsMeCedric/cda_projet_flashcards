import { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import { Deck } from "../../@types/deck";
import { Theme } from "../../@types/deck";
import styles from "./DeckDetails.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { FaBackspace } from "react-icons/fa";
import { FaLock, FaLockOpen, FaRegSquarePlus, FaRegTrashCan } from "react-icons/fa6";
const DeckDetail = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [deck, setDeck] = useState<Deck | undefined>(undefined);
  const [publicDeck, setPublic] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const [themes, setThemes] = useState<Theme[] | undefined>(undefined);
  const deckId = state.deckId;
  const ownerId = state.ownerId;

  useEffect(() => {
    axiosInstance.get(`/users/${ownerId}/decks/${deckId}`).then((res) => setDeck(res.data));
    axiosInstance.get(`/decks/public/${deckId}`).then((res) => setPublic(res.data === null ? false : true));
  }, [navigate, user?.id, state.deckId]);

  useEffect(() => {
    axiosInstance.get(`/users/${ownerId}/decks/${deckId}/cards`).then((res) => setCards(res.data));
  }, [navigate, user?.id, state.deckId]);

  useEffect(() => {
    axiosInstance.get(`/deck-theme/${deckId}`).then((res) => setThemes(res.data));
  }, [navigate, state.deckId]);

  if (deck === undefined || cards === undefined || themes === undefined) {
    return <p>Loading...</p>;
  }
  console.log(themes);
  const addCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate("/new-card", { state: { deckId, ownerId: deck.userId } });
  };

  const makePublic = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    axiosInstance.get(`/users/${ownerId}/decks/${deckId}/publish`).then((res) => {
      setDeck(res.data);
      axiosInstance.get(`/decks/public/${deckId}`).then((res) => setPublic(res.data === null ? false : true));
    });
  };

  const deleteDeck = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const result = confirm("�tes-vous sur de vouloir supprimer le deck ?");
    if (result) {
      axiosInstance.delete(`/users/${ownerId}/decks/${deckId}`).then(() => {
        navigate("/account", { replace: true });
      });
    }
  };

  console.log(user?.id);

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.back}>
            <a className={styles.btn} onClick={() => navigate(-1)}>
              <FaBackspace />
              Retour
            </a>
          </div>

          <div className={styles.title}>
            <h2>{deck.name}</h2>
            <h3>{deck.subject}</h3>
            <div>
              <h4>Thèmes</h4>
              {themes.map((theme) => {
                return <p>{theme.label}</p>;
              })}
            </div>
          </div>
          {(user?.id === deck.userId || user?.role === "admin") && (
            <div className={styles.all_btn}>
              <a className={styles.btn} onClick={addCard}>
                Ajouter carte
                <FaRegSquarePlus />
              </a>
              <a className={styles.btn} onClick={makePublic}>
                {publicDeck ? (
                  <>
                    Rendre privé <FaLock />
                  </>
                ) : (
                  <>
                    Rendre public <FaLockOpen />
                  </>
                )}
              </a>
              <a className={styles.btn} onClick={deleteDeck}>
                Supprimer
                <FaRegTrashCan />
              </a>
            </div>
          )}
        </div>
        <div className={styles.cards_container}>
          {cards.map((card) => (
            <Card card={card} ownerId={deck?.userId} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeckDetail;
