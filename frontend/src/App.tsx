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
import DeckDetails from "./pages/DeckDetails/DeckDetail";
import Game from "./pages/Game/Game";
import { useEffect } from "react";
import axiosInstance from "./utils/axios";
import { useAppSelector } from "./hooks/redux";

const App = () => {
  let { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    axiosInstance.get("/auth/loggedIn").then((res) => {
      if (res.status === 200) {
        axiosInstance.get(`/users/${res.data.id}`).then((u) => {
          user = u.data;
        });
      }
    });
  }, []);

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
        <Route path="/deck-details" element={<DeckDetails />} />
        <Route path="/play" element={<Game />} />
      </Route>
    </Routes>
  );
};

export default App;
