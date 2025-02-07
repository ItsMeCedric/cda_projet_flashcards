import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import LoginForm from '../../components/PageComponents/LoginForm/LoginForm';

import styles from './Login.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  const navigate = useNavigate();
  const { isLogged, user } = useAppSelector((state) => state.auth);

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute.)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      // todo : LS/ à remplacer par la redirection vers le dashboard - void pour éviter le warning (on ignore la promise, on ne tient pas compte de la valeur retournée)
      void navigate('/', { replace: true });
    }
  }, [isLogged, navigate, user]);

  return (
    <div className={styles.wrap}>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
