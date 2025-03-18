import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./NewDeck.module.css";
import { useNavigate } from "react-router-dom";

const NewDeck = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [themes, setThemes] = useState([""]);
  const [allThemes, setAllThemes] = useState([""]);

  const { user } = useAppSelector((state) => state.auth);
  // Récuperer les themes en bdd
  useEffect(() => {
    axiosInstance.get("/theme").then((data) => {
      setAllThemes(data.data);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axiosInstance.post(`/users/${user?.id}/decks`, { name, subject }).then((res) => {
      navigate("/deck-details", { state: { deckId: res.data.id } });
    });
  };

  const checkTheme = (clickTheme: string) => {
    if (themes.includes(clickTheme)) {
      setThemes(themes.filter((value) => value != clickTheme));
    } else {
      setThemes([...themes, clickTheme]);
    }
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.form_container}>
          <div className={styles.form_wrapper}>
            <h2>Nouveau deck</h2>
            <form method="POST" onSubmit={handleSubmit} style={{ textAlign: "center" }}>
              <div className={styles.form_group}>
                <label htmlFor="deck-name">Nom du deck</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Entrer le nom du deck"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="deck-subject">Sujet du deck</label>
                <input
                  type="text"
                  value={subject}
                  placeholder="Entrer le sujet du deck"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="deck-subject">Thème(s) du deck</label>
                {/* looper sur tous les theme pour les afficher */}
                <input
                  type="checkbox"
                  value={subject}
                  // onChange={(e) => checkTheme(valeur du map)}
                />
              </div>
              <button type="submit" className={styles.btn}>
                Créer
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewDeck;
