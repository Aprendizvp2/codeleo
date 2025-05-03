import "./App.css";
import Header from "./components/header/Header";
import Skills from "./sections/skills/Skills";
import Home from "./sections/home/Home";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";
import SmallHeader from "./components/smallheader/SmallHeader";
import ScrollAnimation from "./components/scrollanimationn/ScrollAnimation";
import { Hidden } from "@mui/material";
import Projects from "./sections/projects/Projects";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <ScrollAnimation>
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ScrollAnimation>
    </div>
  );
}

export default App;
