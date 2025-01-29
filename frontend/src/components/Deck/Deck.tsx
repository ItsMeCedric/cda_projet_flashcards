import classes from "./Deck.module.css";
import { FaFontAwesomeFlag, FaRegBookmark } from "react-icons/fa";

const Deck = ({ deck }: { deck: Deck }) => {
  return (
    <>
      <div className={classes.card} key={deck.id}>
        <h3>{deck.name}e</h3>
        <img src={deck.url} alt="vignette" />
        <div className={classes.infos}>
          <p className={classes.description}>{deck.subject}</p>
          <div className={classes.icons}>
            <span>{deck.downloads}</span>
            <span>{deck.mark}</span>
            <FaFontAwesomeFlag />
            <FaRegBookmark />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deck;
