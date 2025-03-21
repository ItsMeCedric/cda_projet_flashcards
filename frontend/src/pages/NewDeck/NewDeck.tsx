import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./NewDeck.module.css";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../@types/deck";
import { FaBackspace } from "react-icons/fa";

const NewDeck = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  // contient tous les thèmes dispo
  const [options, setOptions] = useState<Theme[]>([]);
  // contient theme : bool pour savoir s'il est coché ou non
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const { user } = useAppSelector((state) => state.auth);
  // Récuperer les themes en bdd
  useEffect(() => {
    const fetchThemes = async () => {
      const res = await axiosInstance.get("/theme");
      setOptions(res.data);

      // on met tous les select à false
      const defaultState = res.data.reduce((acc: { [key: string]: boolean }, option: Theme) => {
        acc[option.label] = false;
        return acc;
      }, {});
      setSelected(defaultState);
    };

    fetchThemes();
  }, []);

  // met a jour le state
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelected((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    axiosInstance.post(`/users/${user?.id}/decks`, { name, subject }).then(async (res) => {
      const selectedThemes = options.filter((option) => selected[option.label]);
      const id = res.data.id;
      for (let index = 0; index < selectedThemes.length; index++) {
        await axiosInstance.post("/deck-theme", { data: selectedThemes[index], id });
      }
      navigate("/deck-details", { state: { deckId: res.data.id, ownerId: user?.id } });
    });
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.back}>
          <a className={styles.btn_back} onClick={() => navigate(-1)}>
            <FaBackspace />
            Retour
          </a>
        </div>
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
              <div className={`${styles.all_checkbox} ${styles.form_group}`}>
                <label htmlFor="deck-subject">Thème(s) du deck</label>
                {options.map((option) => {
                  return (
                    <div className={styles.one_check}>
                      <label htmlFor={option.label}>
                        <input
                          type="checkbox"
                          id={option.label}
                          name={option.label}
                          value={option.label}
                          checked={selected[option.label] || false}
                          onChange={handleCheckboxChange}
                        />
                        {option.label}
                      </label>
                    </div>
                  );
                })}
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
