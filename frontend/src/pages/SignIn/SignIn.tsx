import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import SignInForm from '../../components/PageComponents/SignInForm/SignInForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import styles from './SignIn.module.css';

const SignIn = () => {
  const navigate = useNavigate();
  const { isLogged, user } = useAppSelector((state) => state.auth);

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      void navigate('/', { replace: true }); // todo : LS/à remplacer par la redirection vers le dashboard
    }
  }, [isLogged, navigate, user]);

  return (
    <div className={styles.wrap}>
      <Header />
      <SignInForm />
      <Footer />
    </div>
  );
};
export default SignIn;
