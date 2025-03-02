import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <Hero />
      <Account />
      <Footer />
    </div>
  );
};
export default Dashboard;
