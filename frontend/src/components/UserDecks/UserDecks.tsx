import styles from "./UserDecks.module.css";
import Deck from "../Deck/Deck";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import { Deck as DeckType } from "../../@types/deck";

const UserDecks = () => {
  const [decks, setDecks] = useState<DeckType[]>([]);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    axiosInstance
      .get(`/users/${user?.id}/decks`)
      .then((res) => {
        setDecks(res.data);
      })
      .catch((error) => {
        console.error("Error fetching decks:", error);
      });
  }, []);

  return (
    <div className={styles.all_deck}>
      {decks.map((deck) => (
        <Deck key={deck.id} deck={deck} />
      ))}
    </div>
  );
};

export default UserDecks;
