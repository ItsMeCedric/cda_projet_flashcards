import classes from "./Home.module.css";
import DeckList from "../../components/DeckList/DeckList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import decks from "../../../mock/decks.json";

const Home = () => {
  return (
    <div className={classes.wrap}>
      <Header />
      <Hero />
      <DeckList decks={decks} />
    </div>
  );
};
export default Home;
