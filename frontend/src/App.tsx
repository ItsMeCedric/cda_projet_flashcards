import "./App.css";
import { Routes, Route } from "react-router";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RGPD from "./pages/RGPD/RGPD";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthRoute from "./components/AuthRoute";
import NewCard from "./pages/NewCard/NewCard";
import NewDeck from "./pages/NewDeck/NewDeck";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/RGPD" element={<RGPD />} />
      <Route element={<AuthRoute />}>
        <Route path="/account" element={<Dashboard />} />
        <Route path="/new-card" element={<NewCard />} />
        <Route path="/new-deck" element={<NewDeck />} />
      </Route>
    </Routes>
  );
};

export default App;
