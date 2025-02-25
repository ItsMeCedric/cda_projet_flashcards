import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewCardForm from '../../components/PageComponents/NewCardForm/NewCardForm';

import styles from './NewCard.module.css';

const NewDeck = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <NewCardForm />
      <Footer />
    </div>
  );
};

export default NewDeck;
