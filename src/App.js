import { GlobalStyle } from "./GlobalStyle";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/Home/HomePage";
import Research from "./pages/ResearchPage/Research.jsx";
import ResearchAbstract from "./components/Research/ResearchAbstract.jsx";
import Contact from "./pages/ContactPage/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <Navigation />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/research/" element={<Research />}></Route>
          <Route
            path="/research/:abstract"
            element={<ResearchAbstract />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
