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
import { MouseEvent, useState } from "react";
import { Deck } from "../../@types/deck";
import { User } from "../../@types/user";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [userData, setUser] = useState<User | undefined>(undefined);
  const [decks, setDecks] = useState<Deck[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  const deleteUser = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const result = confirm("Voulez-vous supprimer votre compte ?");
    if (user && result) {
      await axiosInstance.delete(`/users/${user.id}`);
      navigate("/");
    }
  };

  const downloadUserData = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(userData), JSON.stringify(decks), JSON.stringify(cards)], {
      type: "application/json",
    });
    element.href = URL.createObjectURL(file);
    element.download = "data.json";
    document.body.appendChild(element);
    element.click();
  };

  const getAllUserData = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    axiosInstance.get(`/users/${user?.id}`).then((res) => setUser(res.data));
    axiosInstance.get(`/users/${user?.id}/decks`).then((res) => {
      setDecks(res.data);
      res.data.forEach((deck: Deck) => {
        axiosInstance.get(`/users/${user?.id}/decks/${deck.id}/cards`).then((res) =>
          setCards((prev) => {
            prev.push(res.data);
            return prev;
          })
        );
      });
    });
    downloadUserData();
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.btn_grp}>
        <NavLink className={styles.btn_option} to={"/new-deck"}>
          Créer un deck <FaSheetPlastic />
        </NavLink>
        <a onClick={getAllUserData} className={styles.btn_option}>
          Récupérer toutes mes données
        </a>
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
