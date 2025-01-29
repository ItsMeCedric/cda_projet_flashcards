import styles from "./Deck.module.css";

const Deck = ({ deck }: { deck: Deck }) => {
  return (
    <div className={styles.card}>
      <svg className={styles.flag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
        <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24L0 64 0 350.5 0 400l0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-100 80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-279.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52l0-28zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8l0 241.8-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5l0-237z" />
      </svg>
      <h3>{deck.name}</h3>
      <img src="https://i.pravatar.cc/300?img=10" alt="vignette" />
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, rem. Esse tempore exercitationem nam
        reprehenderit minima quae magni,
      </p>
      <div className={styles.icons}>
        <span>{deck.downloads}</span>
        <span>{deck.mark}</span>
      </div>
    </div>
  );
};

export default Deck;
