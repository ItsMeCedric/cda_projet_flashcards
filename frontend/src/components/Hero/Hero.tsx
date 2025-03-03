import styles from "./Hero.module.css";
import { useDispatch } from "react-redux";
import { setSearchContent } from "../../store/reducers/searchSlice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_header}>L'application qui va te faire apprendre tes cartes !</h1>
      <label className={styles.hero_label} htmlFor="search">
        Rechercher
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here for deck"
        onChange={(e) => dispatch(setSearchContent(e.target.value))}
      />
    </div>
  );
};

export default Hero;
