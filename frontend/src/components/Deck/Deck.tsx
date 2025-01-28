import styles from "./Deck.module.css";

const Deck = ({ deck }: { deck: Deck }) => {
  return (
    <div className={styles.card}>
      <h3>{deck.name}</h3>
      <img src="https://i.pravatar.cc/300?img=10" alt="vignette" />
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
        rem. Esse tempore exercitationem nam reprehenderit minima quae magni,
      </p>
      <div className={styles.icons}>
        <span>flag</span>
        <span>mark</span>
      </div>
    </div>
  );
};

export default Deck;
