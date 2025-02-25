import { Routes, Route, Navigate, Outlet } from 'react-router';
import { useAppSelector } from './hooks/redux';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RGPD from './pages/RGPD/RGPD';

import './App.css';
import NewDeck from './pages/NewDeck/NewDeck';
import NewCard from './pages/NewCard/NewCard';

function PublicOnlyRoute() {
  const { isLogged } = useAppSelector((state) => state.auth);
  // todo : LS/ rediriger vers Dashboard si connecté
  return isLogged ? <Navigate to="/" replace /> : <Outlet />;
}

// function ProtectedRoute() {
//   const { isLogged } = useAppSelector((state) => state.auth);
//   return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
// }

const App = () => {
  return (
    <Routes>
      {/* Routes accessibles par tous */}
      <Route index path="/" element={<Home />} />
      <Route path="/RGPD" element={<RGPD />} />

      {/* Routes accessibles uniquement aux utilisateurs non connecté */}
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        // todo: LS/ /!\ déplacer vers ProtectedRoute
        <Route path="/new-deck" element={<NewDeck />} />
        <Route path="/new-card" element={<NewCard />} />
      </Route>

      {/* Routes accessibles uniquement aux utilisateurs commectés */}
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
};

export default App;
