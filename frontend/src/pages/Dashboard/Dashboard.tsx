import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import UserDecks from "../../components/UserDecks/UserDecks";

const Dashboard = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.dashboard}>
        <Account />
        <UserDecks />
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
