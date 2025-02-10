import SignInForm from '../../components/PageComponents/SignInForm/SignInForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <SignInForm />
      <Footer />
    </div>
  );
};
export default SignIn;
