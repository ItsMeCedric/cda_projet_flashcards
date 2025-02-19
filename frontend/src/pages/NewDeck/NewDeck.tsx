import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewDeckForm from '../../components/PageComponents/NewDeckForm/NewDeckForm';

import styles from './NewDeck.module.css';
const NewDeck = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <NewDeckForm />
      <Footer />
    </div>
  );
};

export default NewDeck;
