import styles from "./DeckList.module.css";
import Deck from "../Deck/Deck";
import { Deck as DeckType } from "../../@types/deck";
import { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useDispatch, useSelector } from "react-redux";
import { setSearchContent } from "../../store/reducers/searchSlice";
import { RootState } from "@reduxjs/toolkit/query";

const DeckList = ({ decks }: { decks: DeckType[] }) => {
  // ici axios avec le searchContent recuperé into on renvoie ce qu'on voudra du back pour afficher seulement le résultat de la recherche

  const searchContent = useAppSelector((state) => state.search.searchContent);

  console.log(searchContent);
  return (
    <div className={styles.all_deck}>
      {decks
        .filter((deck) => {
          return deck.name.includes(searchContent);
        })
        .map((deck) => (
          <Deck deck={deck} />
        ))}
    </div>
  );
};

export default DeckList;
