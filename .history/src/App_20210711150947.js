import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/NavBar.js";
import "./components/Contact.js";
import { NavBar } from "./components/NavBar.js";
import About from "./components/About.js";
import Project from "./components/Projects.js";
import ContactPage from "./components/Contact.js";
import Knowledge from "./components/knowledge.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Knowledge />
      <Project />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
