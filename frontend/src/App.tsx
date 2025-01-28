import "./App.css";
import { Routes, Route } from "react-router";

import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
