import { FormEvent, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./NewCard.module.css";
import { useLocation } from "react-router-dom";

const NewCard = () => {
  const { state } = useLocation();
  const { deckId } = state;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { user } = useAppSelector((state) => state.auth);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axiosInstance.post(`/users/${user}/decks/${deckId}/cards`, { question, answer, deckId }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.form_wrapper}>
            <h2>Nouvelle carte</h2>
            <form method="POST" onSubmit={handleSubmit} style={{ textAlign: "center" }}>
              <div className={styles.form_group}>
                <label htmlFor="card-question">Question</label>
                <input
                  type="text"
                  value={question}
                  placeholder="Entrez la question"
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="card-answer">Réponse</label>
                <input
                  type="text"
                  value={answer}
                  placeholder="Entrez la réponse"
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Créer
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewCard;
