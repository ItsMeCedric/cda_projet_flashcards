import styles from "./DeckList.module.css";
import Deck from "../Deck/Deck";
import { Deck as DeckType } from "../../@types/deck";
import { useAppSelector } from "../../hooks/redux";

const DeckList = ({ decks }: { decks: DeckType[] }) => {
  // ici axios avec le searchContent recuperé into on renvoie ce qu'on voudra du back pour afficher seulement le résultat de la recherche

  const searchContent = useAppSelector((state) => state.search.searchContent);
  const selectedThemes = useAppSelector((state) => state.search.selectedThemes);
  // sortir les theme par le deckId et verifier dans ça

  return (
    <div className={styles.all_deck}>
      {decks
        .filter((deck) => {
          const matchesSearch = searchContent === "" || deck.name.toLowerCase().includes(searchContent.toLowerCase());
          const matchesThemes =
            selectedThemes.length === 0 ||
            selectedThemes.every((theme) =>
              deck.Themes.some((t) => {
                return t.label == theme;
              })
            );
          return matchesSearch && matchesThemes;
        })
        .map((deck) => (
          <Deck deck={deck} />
        ))}
    </div>
  );
};

export default DeckList;
