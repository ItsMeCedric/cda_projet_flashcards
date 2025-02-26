import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import axiosInstance from "../../utils/axios";

import { Deck } from "../../@types/deck";

const UserDecks: React.FC = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await axiosInstance.get(`/${user?.id}/decks`);
        setDecks(response.data);
      } catch (error) {
        console.error("Failed to fetch decks:", error);
      }
    };

    if (user) {
      fetchDecks();
    }
  }, [user]);

  return (
    <div>
      <h2>Mes Decks</h2>
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>{deck.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDecks;
