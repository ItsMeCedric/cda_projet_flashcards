import DeckList from "../../components/DeckList/DeckList";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import decks from "../../../mock/decks.json";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <DeckList decks={decks} />
    </>
  );
};
export default Home;
