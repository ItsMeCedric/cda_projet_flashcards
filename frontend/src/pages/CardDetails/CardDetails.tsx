import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState, MouseEvent } from "react";
import axiosInstance from "../../utils/axios";
import styles from "./CardDetails.module.css";
import { FaBackspace } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

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
        <div className={styles.header}>
          <div className={styles.back}>
            <a className={styles.btn} onClick={() => navigate(-1)}>
              <FaArrowLeft />
              <span className={styles["full-text"]}>Retour</span>
              <span className={styles["icon-text"]}>Retour</span>
            </a>
          </div>
          <div className={styles.title}>
            <h2>Question : {card.question}</h2>
            <h3>Réponse : {card.answer}</h3>
          </div>
          <div className={styles.all_btn}>
            <a className={styles.btn} onClick={deleteCard}>
              <FaTrash />
              <span className={styles["full-text"]}>Supprimer</span>
              <span className={styles["icon-text"]}>Supprimer</span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardDetails;