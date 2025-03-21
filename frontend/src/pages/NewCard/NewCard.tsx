import { FormEvent, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./NewCard.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa"; // Ajout des icônes

const NewCard = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { deckId, ownerId } = state;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { user } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axiosInstance.post(`/users/${user?.id}/decks/${deckId}/cards`, { question, answer });
    navigate("/deck-details", { state: { deckId, ownerId } });
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.back}>
          <button className={styles.btn_back} onClick={() => navigate(-1)}>
            <FaArrowLeft className={styles.icon} /> Retour
          </button>
        </div>
        <div className={styles.form_container}>
          <h2>Nouvelle carte</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label>Question</label>
              <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div className={styles.form_group}>
              <label>Réponse</label>
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </div>
            <button type="submit" className={styles.btn}>
              <FaPlus className={styles.icon} /> Ajouter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewCard;
