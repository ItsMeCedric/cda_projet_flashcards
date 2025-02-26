import styles from "./DeckList.module.css";
import Deck from "../Deck/Deck";
import { Deck as DeckType } from "../../@types/deck";

const DeckList = ({ decks }: { decks: DeckType[] }) => {
  return (
    <div className={styles.all_deck}>
      {decks.map((deck) => (
        <Deck deck={deck} />
      ))}
    </div>
  );
};

export default DeckList;
