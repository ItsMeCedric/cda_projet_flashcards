import "./App.css";
import { Routes, Route } from "react-router";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RGPD from "./pages/RGPD/RGPD";
import Account from "./pages/Account/Account";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/RGPD" element={<RGPD />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};

export default App;
