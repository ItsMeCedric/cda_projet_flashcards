import styles from "./Hero.module.css";
import { useAppSelector } from "../../hooks/redux";

import { useDispatch } from "react-redux";
import { setSearchContent, toggleTheme } from "../../store/reducers/searchSlice";
import { useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");
  const themes = ["Math", "Info", "Anglais"];
  const dispatch = useDispatch();
  const selectedThemes = useAppSelector((state) => state.search.selectedThemes);
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
        <div className={styles.filter}>
          <label className={styles.hero_label} htmlFor="filter">
            Filtres
          </label>
          {themes.map((theme) => (
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedThemes.includes(theme)}
                onChange={() => dispatch(toggleTheme(theme))}
              />
              <label key={theme}>{theme}</label>
            </div>
          ))}
        </div>

        <input type="submit" className={styles.search_submit} />
      </form>
    </div>
  );
};

export default Hero;
