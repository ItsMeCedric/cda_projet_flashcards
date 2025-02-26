import styles from "./UserDecks.module.css";
import DeckList from "../../components/DeckList/DeckList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import decks from "../../../mock/decks.json";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Hero />
      <DeckList decks={decks.userId} />
      <Footer />
    </div>
  );
};
export default Home;
