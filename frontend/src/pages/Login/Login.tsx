import LoginForm from '../../components/PageComponents/LoginForm/LoginForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
