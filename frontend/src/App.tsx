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
//import { useEffect } from "react";
//import { useAppDispatch, useAppSelector } from "./hooks/redux";
//import { validateToken } from "./store/actions/authActions";

const App = () => {
  //const dispatch = useAppDispatch();
  //const { user } = useAppSelector((state) => state.auth);

  //useEffect(() => {
  //  console.log(user);
  //  if (user === undefined) dispatch(validateToken());
  //}, [user]);

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
