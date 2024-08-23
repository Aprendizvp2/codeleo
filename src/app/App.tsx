import "./App.css";
import Header from "./components/header/Header";
import Skills from "./sections/skills/Skills";
import Home from "./sections/home/Home";
import Contact from "./sections/contact/Contact";
import Footer from "./components/footer/Footer";
import SmallHeader from "./components/smallheader/SmallHeader";
import { Hidden } from "@mui/material";

function App() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <Home />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
