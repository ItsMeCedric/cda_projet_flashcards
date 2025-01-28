import styles from "./DeckList.module.css";
import Deck from "../Deck/Deck";

const DeckList = ({ decks }: { decks: Deck[] }) => {
  return (
    <div className={styles.all_deck}>
      {decks.map((deck) => (
        <Deck deck={deck} />
      ))}
    </div>
  );
};

export default DeckList;
