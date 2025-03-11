import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

const Card = ({ card }: { card: Card }) => {
  const navigate = useNavigate();
  const openCardDetails = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate("/card-details", { state: { cardId: card.id } });
  };

  return (
    <div className={styles.card} onClick={openCardDetails}>
      <h3>{card.question}</h3>
      <img src={card.questionImg} alt="vignette" />
      <div className={styles.infos}>
        <p className={styles.description}>{card.answer}</p>
      </div>
    </div>
  );
};

export default Card;
