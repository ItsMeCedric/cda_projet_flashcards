import styles from "./DeckList.module.css";
import Deck from "../Deck/Deck";
import { Deck as DeckType } from "../../@types/deck";
import { useDispatch } from "react-redux";
import { setSearchContent } from "../../store/reducers/searchSlice";

const DeckList = ({ decks }: { decks: DeckType[] }) => {
  // ici axios avec le searchContent recuperé into on renvoie ce qu'on voudra du back pour afficher seulement le résultat de la recherche

  return (
    <div className={styles.all_deck}>
      {decks.map((deck) => (
        <Deck deck={deck} />
      ))}
    </div>
  );
};

export default DeckList;
