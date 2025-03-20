import styles from "./Hero.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { setSearchContent, toggleTheme } from "../../store/reducers/searchSlice";
import { useEffect, useState } from "react";
import { Theme } from "../../@types/deck";
import axiosInstance from "../../utils/axios";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState<Theme[]>([]);

  useEffect(() => {
    const fetchThemes = async () => {
      const res = await axiosInstance.get("/theme");
      setOptions(res.data);
    };
    fetchThemes();
  }, []);
  const dispatch = useAppDispatch();
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
          {options.map((option) => (
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={selectedThemes.includes(option.label)}
                onChange={() => dispatch(toggleTheme(option.label))}
              />
              <label key={option.id}>{option.label}</label>
            </div>
          ))}
        </div>

        <input type="submit" className={styles.search_submit} />
      </form>
    </div>
  );
};

export default Hero;
