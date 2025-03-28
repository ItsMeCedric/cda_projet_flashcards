import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import Account from "../../components/Account/Account";
import Footer from "../../components/Footer/Footer";
import UserDecks from "../../components/UserDecks/UserDecks";
import axiosInstance from "../../utils/axios";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { FaUserSlash, FaDownload } from "react-icons/fa";
import { FaSheetPlastic } from "react-icons/fa6";
import { MouseEvent } from "react";
import { logout as logoutAction } from "../../store/actions/authActions";
import { Deck } from "../../@types/deck";
import { User } from "../../@types/user";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const deleteUser = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const result = confirm("Voulez-vous supprimer votre compte ?");
    if (user && result) {
      await axiosInstance.delete(`/users/${user.id}`);
      dispatch(logoutAction());
      navigate("/", { replace: true });
    }
  };

  const downloadUserData = (data: { user: User; decks: Deck[]; cards: Card[] }) => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data.user), JSON.stringify(data.decks), JSON.stringify(data.cards)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "data.json";
    document.body.appendChild(element);
    element.click();
  };

  const getAllUserData = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    try {
      const userResponse = await axiosInstance.get(`/users/${user?.id}`);
      const decksResponse = await axiosInstance.get(`/users/${user?.id}/decks`);
      const cardRequests = decksResponse.data.map(async (deck: Deck) => {
        const cardsResponse = await axiosInstance.get(`/users/${user?.id}/decks/${deck.id}/cards`);
        return cardsResponse.data;
      });
      const cardsData = await Promise.all(cardRequests);
      const data = {
        user: userResponse.data,
        decks: decksResponse.data,
        cards: cardsData,
      };
      downloadUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.btn_grp}>
        <NavLink className={styles.btn_option} to={"/new-deck"}>
          <span className={styles["full-text"]}>Créer un deck</span>
          <span className={styles["icon-text"]}>Nouveau</span>
          <FaSheetPlastic />
        </NavLink>
        <a onClick={getAllUserData} className={styles.btn_option}>
          <span className={styles["full-text"]}>Récupérer mes données</span>
          <span className={styles["icon-text"]}>Données</span>
          <FaDownload />
        </a>
        <a onClick={deleteUser} className={styles.btn_option}>
          <span className={styles["full-text"]}>Supprimer le profil</span>
          <span className={styles["icon-text"]}>Supprimer</span>
          <FaUserSlash />
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
