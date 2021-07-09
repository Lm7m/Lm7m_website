import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar.js";
import "./components/Contact.js";
import { NavBar } from "./components/NavBar.js";
import About from "./components/About.js";
import Project from "./components/Projects.js";
import ContactPage from "./components/Contact.js";
import Knowledge from "./components/knowledge.js";
import Knowledge2 from "./components/Knowledge2";
import Header from "./components/Header.js";
import { Helmet } from 'react-helmet'

function App() {
  return (
    <> 
    <Helmet>
      <title>Lm7m's Portofolio</title>
    </Helmet>

      <NavBar />
      <Header/>
      <About />
      <Knowledge />
      <Knowledge2 />
      <Project />
      <ContactPage />

    </>
  );
}

export default App;


