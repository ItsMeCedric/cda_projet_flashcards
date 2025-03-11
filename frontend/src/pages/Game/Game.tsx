import { useEffect, useState, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Game.module.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Deck } from "../../@types/deck";

type CheckDisplay = "check_hidden" | "check_shown";
type AnswerDisplay = "answer_hidden" | "answer_shown";
type NextDisplay = "next_hidden" | "next_shown";

const Game = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const { state } = useLocation();
  const deckId = state.deckId;
  const [deck, setDeck] = useState<Deck | undefined>(undefined);
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const [card, setCard] = useState<Card | undefined>(undefined);
  const [index, setIndex] = useState<number>(0);
  const [checkDisplay, setCheckDisplay] = useState<CheckDisplay>("check_hidden");
  const [answerDisplay, setAnswerDisplay] = useState<AnswerDisplay>("answer_hidden");
  const [nextDisplay, setNextDisplay] = useState<NextDisplay>("next_hidden");
  const [showButton, setShowButton] = useState<"inline" | "none">("inline");
  const [showGame, setShowGame] = useState<boolean>(true);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}`).then((res) => {
      setDeck(res.data);
      console.log(res.data);
    });
    axiosInstance.get(`/users/${user?.id}/decks/${deckId}/cards`).then((res) => {
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
  };

  const endGame = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axiosInstance.patch(`/users/${user?.id}/decks/${deckId}`, { id: deckId, playCount: deck.playCount + 1 });
    navigate("/account", { replace: true });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div style={{ display: showGame ? "" : "none" }}>
          <div className={styles.card}>
            <p>{card?.question}</p>
            <button style={{ display: showButton }} onClick={showCheck}>
              Afficher
            </button>
            <p className={styles[answerDisplay]}>{card?.answer}</p>
            <div>
              <button className={styles[checkDisplay]} onClick={(e) => setAnswer(e, true)}>
                Vrai
              </button>
              <button className={styles[checkDisplay]} onClick={(e) => setAnswer(e, false)}>
                Faux
              </button>
            </div>
          </div>
          <p>
            {correctAnswer}/{cards.length}
          </p>
          <button className={styles[nextDisplay]} onClick={nextCard}>
            Suivant
          </button>
        </div>
        <div style={{ display: showResult ? "" : "none" }}>
          <p>GG!</p>
          <p>
            Vous avez {correctAnswer} bonne(s) réponse(s) sur {cards.length} carte(s)!
          </p>
          <button onClick={endGame}>Terminer</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Game;
