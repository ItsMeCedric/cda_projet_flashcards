import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";
import { Deck } from "../../@types/deck";
import styles from "./UserDecks.module.css";

const UserDecks: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axiosInstance.get(`/users/${user?.id}/decks`);
        setDecks(response.data);
      } catch (error) {
        console.error("Failed to fetch decks:", error);
      }
    };

    if (user) {
      fetchDecks();
    }
  }, [user]);

  // total decks user
  const totalDecks = decks.length;

  return (
    <div className={styles.all_deck}>
      <h2>Mes Decks</h2>
      <p>Nombre total de decks : {totalDecks}</p>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>{deck.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDecks;
