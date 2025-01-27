import "./App.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Footer from "./components/Footer/Footer";

function App() {
  // import ThemeContext
  const context = useContext(ThemeContext);

  useEffect(() => {
    // Vérification si context existe avant de manipuler data-theme
    if (context) {
      document.body.setAttribute("data-theme", context.theme);
    }
  }, [context]);

  return (
    <div className="box">
      <Footer />
    </div>
  );
}

export default App;
