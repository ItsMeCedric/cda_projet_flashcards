import styles from "./Hero.module.css";
import { useDispatch } from "react-redux";
import { setSearchContent } from "../../store/reducers/searchSlice";
import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchContent(search));
  };
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_header}>L'application qui va te faire apprendre tes cartes !</h1>
      <form onSubmit={handleSubmit}>
        <label className={styles.hero_label} htmlFor="search">
          Rechercher
        </label>
        <input
          className={styles.search}
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Search here for deck"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" className={styles.search_submit} />
      </form>
    </div>
  );
};

export default Hero;
