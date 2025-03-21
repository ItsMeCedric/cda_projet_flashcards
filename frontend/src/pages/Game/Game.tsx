import { useEffect, useState, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import styles from "./Game.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Deck } from "../../@types/deck";
import { FaBackspace } from "react-icons/fa";

type CheckDisplay = "check_hidden" | "check_shown";
type AnswerDisplay = "answer_hidden" | "answer_shown";
type NextDisplay = "next_hidden" | "next_shown";

const Game = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const deckId = state.deckId;
  const userId = state.userId;
  const [deck, setDeck] = useState<Deck | undefined>(undefined);
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const [card, setCard] = useState<Card | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [checkDisplay, setCheckDisplay] = useState<CheckDisplay>("check_hidden");
  const [answerDisplay, setAnswerDisplay] = useState<AnswerDisplay>("answer_hidden");
  const [nextDisplay, setNextDisplay] = useState<NextDisplay>("next_hidden");
  const [showButton, setShowButton] = useState<"inline" | "none">("inline");
  const [showGame, setShowGame] = useState<boolean>(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showResult, setShowResult] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    axiosInstance.get(`/users/${userId}/decks/${deckId}`).then((res) => {
      setDeck(res.data);
    });
    axiosInstance.get(`/users/${userId}/decks/${deckId}/cards`).then((res) => {
      setCards(res.data);
      setCard(res.data[index]);
    });
  }, []);

  useEffect(() => {
    if (cards != undefined) setCard(cards[index]);
  }, [index]);

  if (cards === undefined || card === undefined || deck === undefined) return <p>Loading...</p>;

  const showCheck = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCheckDisplay("check_shown");
    setAnswerDisplay("answer_shown");
    setShowButton("none");
  };

  const setAnswer = (e: MouseEvent<HTMLButtonElement>, answer: boolean) => {
    e.preventDefault();
    if (answer) setCorrectAnswer((prev) => prev + 1);
    answer ? setFeedbackMessage("Bien joué :)") : setFeedbackMessage("Dommage :(");
    setCheckDisplay("check_hidden");
    setNextDisplay("next_shown");
  };

  const nextCard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (index + 1 === cards?.length) {
      setShowResult(true);
      setShowGame(false);
      return;
    }
    setIndex((prev) => prev + 1);
    setAnswerDisplay("answer_hidden");
    setCheckDisplay("check_hidden");
    setNextDisplay("next_hidden");
    setShowButton("inline");
    setFeedbackMessage("");
  };

  const endGame = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axiosInstance.patch(`/users/${userId}/decks/${deckId}`, { playCount: deck.playCount + 1 });
    navigate(-1);
  };

  return (
    <div className={styles["main-container"]}>
      <Header />
      <div className={styles.content}>
        <div className={styles.back}>
          <a className={styles.btn} onClick={() => navigate(-1)}>
            <FaBackspace />
            Retour
          </a>
        </div>
        <div className={styles.container}>
          <div style={{ display: showGame ? "" : "none" }}>
            <div className={styles.card}>
              <h2>Question n°{cards.indexOf(card) + 1}</h2>
              <h3>{card?.question}</h3>
              <div className={`${styles.description} ${styles[answerDisplay]}`}>
                <p>{card?.answer}</p>
              </div>
              <p>{feedbackMessage}</p>
              <div className={styles["button-container"]}>
                {nextDisplay === "next_shown" && (
                  <button className={styles.button} onClick={nextCard}>
                    Suivant
                  </button>
                )}
                {showButton === "inline" && (
                  <button className={styles.button} onClick={showCheck}>
                    Afficher
                  </button>
                )}
                {checkDisplay === "check_shown" && (
                  <div className={styles["answer-buttons"]}>
                    <button className={styles.button} onClick={(e) => setAnswer(e, true)}>
                      Vrai
                    </button>
                    <button className={styles.button} onClick={(e) => setAnswer(e, false)}>
                      Faux
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={styles["result-container"]}>
              <p>
                Bonnes réponses : {correctAnswer}/{cards.length}
              </p>
            </div>
          </div>
          <div style={{ display: showResult ? "" : "none" }}>
            <p>GG!</p>
            <p>
              Vous avez {correctAnswer} bonne(s) réponse(s) sur {cards.length} carte(s)!
            </p>
            {(correctAnswer / cards.length) * 100 <= 33.4 && (
              <div className={styles.result}>
                <p>Entraîne-toi encore !</p>
                <img src="https://storage.needpix.com/rsynced_images/smiley-1635454_1280.png" alt="good" />
              </div>
            )}
            {(correctAnswer / cards.length) * 100 <= 66.7 && (correctAnswer / cards.length) * 100 > 33.4 && (
              <div className={styles.result}>
                <p>Tu peux encore mieux faire !</p>
                <img src="https://storage.needpix.com/rsynced_images/smiley-1635455_1280.png" alt="good" />
              </div>
            )}
            {(correctAnswer / cards.length) * 100 > 66.7 && (
              <div className={styles.result}>
                <p>Tu gères !</p>
                <img src="https://live.staticflickr.com/5605/14982108564_dbe35270f9_c.jpg" alt="good" />
              </div>
            )}
            <div className={styles["end-button-container"]}>
              <button className={styles.button} onClick={endGame}>
                Terminer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
