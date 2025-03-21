import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState, MouseEvent } from "react";
import axiosInstance from "../../utils/axios";
import styles from "./CardDetails.module.css";
import { FaBackspace } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const CardDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { ownerId, deckId, cardId } = state;
  const [card, setCard] = useState<Card | undefined>(undefined);

  useEffect(() => {
    axiosInstance.get(`/users/${ownerId}/decks/${deckId}/cards/${cardId}`).then((card) => setCard(card.data));
  }, [deckId, cardId]);

  const deleteCard = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const result = confirm("Voulez-vous vraiment supprimer cette carte ?");
    if (result) {
      axiosInstance.delete(`/users/${ownerId}/decks/${deckId}/cards/${cardId}`).then(() => {
        navigate(-1);
      });
    }
  };

  if (card == undefined) return <p>Loading...</p>;

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.back}>
          <a className={styles.btn} onClick={() => navigate(-1)}>
            <FaBackspace />
            Retour
          </a>
        </div>
        <div className={styles.header}>
          <div className={styles.spacer}></div>
          <div className={styles.title}>
            <h2>Question : {card.question}</h2>
            <h3>Réponse : {card.answer}</h3>
          </div>

          <div className={styles.all_btn}>
            <a className={styles.btn} onClick={deleteCard}>
              Supprimer
              <FaRegTrashCan />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CardDetails;
