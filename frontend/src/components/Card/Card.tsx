import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { FaAlignCenter } from "react-icons/fa";

const Card = ({ card, ownerId }: { card: Card; ownerId: number }) => {
  const navigate = useNavigate();
  const openCardDetails = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/card-details", { state: { cardId: card.id, deckId: card.deckId, ownerId } });
  };

  return (
    <div className={styles.card}>
      <h3>Question : </h3>
      <p>{card.question}</p>
      <img src={"https://placehold.co/300x195"} alt="vignette" />
      <h3>Réponse : </h3>
      <p>{card.answer}</p>
      <button className={styles.button} onClick={openCardDetails}>
        <FaAlignCenter /> Détails
      </button>
    </div>
  );
};

export default Card;
