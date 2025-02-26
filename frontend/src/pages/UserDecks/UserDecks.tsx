import styles from "./UserDecks.module.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import UserDecks from "../../components/UserDecks/UserDecks";

const Home = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Hero />
      <UserDecks />
      <Footer />
    </div>
  );
};
export default Home;
