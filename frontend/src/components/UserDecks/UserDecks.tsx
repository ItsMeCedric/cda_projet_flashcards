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
    if (user) {
      axiosInstance
        .get(`/users/${user.id}/decks`)
        .then((res) => {
          console.log("Fetched decks:", res.data);
          setDecks(res.data);
        })
        .catch((error) => {
          console.error("Error fetching decks:", error);
        });
    }
  }, [user]);

  return (
    <div className={styles.all_deck}>
      {decks.map((deck) => (
        <Deck key={deck.id} deck={deck} />
      ))}
    </div>
  );
};

export default UserDecks;
