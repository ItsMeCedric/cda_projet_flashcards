import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import UserDecks from "../../components/UserDecks/UserDecks";
import axiosInstance from "../../utils/axios";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const deleteUser = async () => {
    if (user) {
      await axiosInstance.delete(`/users/${user.id}`);
      navigate("/");
    }
  };
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.btn_grp}>
        <NavLink className={styles.btn_option} to={"/new-deck"}>
          Créer un deck
        </NavLink>
        <a onClick={deleteUser} className={styles.btn_option}>
          Supprimer le profil
        </a>
      </div>

      <div className={styles.dashboard}>
        <Account />
        <UserDecks />
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
