import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axiosInstance from "../../utils/axios";
import { useAppSelector } from "../../hooks/redux";
import styles from "./NewDeck.module.css";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../@types/deck";
import { FaArrowLeft, FaPlus } from "react-icons/fa"; // Ajout des icônes

const NewDeck = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [options, setOptions] = useState<Theme[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchThemes = async () => {
      const res = await axiosInstance.get("/theme");
      setOptions(res.data);
      const defaultState = res.data.reduce((acc: { [key: string]: boolean }, option: Theme) => {
        acc[option.label] = false;
        return acc;
      }, {});
      setSelected(defaultState);
    };
    fetchThemes();
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelected((prev) => ({ ...prev, [value]: checked }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await axiosInstance.post(`/users/${user?.id}/decks`, { name, subject });
    const selectedThemes = options.filter((option) => selected[option.label]);
    const id = res.data.id;

    await Promise.all(
      selectedThemes.map((theme) => axiosInstance.post("/deck-theme", { data: theme, id }))
    );

    navigate("/deck-details", { state: { deckId: id, ownerId: user?.id } });
  };

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.back}>
          <button className={styles.btn_back} onClick={() => navigate(-1)}>
            <FaArrowLeft className={styles.icon} /> Retour
          </button>
        </div>
        <div className={styles.form_container}>
          <h2>Nouveau deck</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_group}>
              <label htmlFor="deck-name">Nom du deck</label>
              <input type="text" value={name} placeholder="Nom du deck" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="deck-subject">Sujet du deck</label>
              <input type="text" value={subject} placeholder="Sujet du deck" onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className={styles.all_checkbox}>
              <label>Thèmes du deck</label>
              {options.map((option) => (
                <div key={option.label} className={styles.one_check}>
                  <input type="checkbox" id={option.label} value={option.label} checked={selected[option.label] || false} onChange={handleCheckboxChange} />
                  <label htmlFor={option.label}>{option.label}</label>
                </div>
              ))}
            </div>
            <button type="submit" className={styles.btn}>
              <FaPlus className={styles.icon} /> Créer
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewDeck;
