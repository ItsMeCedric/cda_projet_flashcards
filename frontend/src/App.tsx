import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router';

import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { useAppSelector } from './hooks/redux';

function PublicOnlyRoute() {
  const { isLogged } = useAppSelector((state) => state.auth);
  // todo : LS/ redirigé vers Dashboard si connecté
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

      {/* Routes accessibles uniquement aux utilisateurs non connecté */}
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>

      {/* Routes accessibles uniquement aux utilisateurs commectés */}
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> */}
    </Routes>
  );
};

export default App;
