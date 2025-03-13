import styles from "./Home.module.css";
import DeckList from "../../components/DeckList/DeckList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import { Deck } from "../../@types/deck";

const Home = () => {
  const { pathname } = useLocation();
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    axiosInstance.get(`/decks/public`).then((res) => setDecks(res.data));
  }, [pathname]);

  return (
    <div className={styles.wrap}>
      <Header />
      <Hero />
      <DeckList decks={decks} />
      <Footer />
    </div>
  );
};
export default Home;
