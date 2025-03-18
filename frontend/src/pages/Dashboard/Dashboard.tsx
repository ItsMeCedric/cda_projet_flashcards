import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import UserDecks from "../../components/UserDecks/UserDecks";
import axiosInstance from "../../utils/axios";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { FaUserSlash } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);

  const deleteUser = async () => {
    const result = confirm("Voulez-vous supprimer votre compte ?");
    if (user && result) {
      await axiosInstance.delete(`/users/${user.id}`);
      navigate("/");
    }
  };
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.btn_grp}>
        <NavLink className={styles.btn_option} to={"/new-deck"}>
          Créer un deck <FaSheetPlastic />
        </NavLink>
        <a onClick={deleteUser} className={styles.btn_option}>
          Supprimer le profil <FaUserSlash />
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
