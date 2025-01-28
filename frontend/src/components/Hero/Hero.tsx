import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero_header}>
        L'application qui va te faire apprendre tes cartes !
      </h1>
      <label className={styles.hero_label} htmlFor="search">
        Rechercher
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here for deck"
      />
    </div>
  );
};

export default Hero;
