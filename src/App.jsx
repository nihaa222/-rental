import "./App.css";

import Book from "./components/Book";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Models from "./components/Models";
import MuAccordion from "./components/MuAccordian";
import Plan from "./components/Plan";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Heading />
      <Hero />
      <Book />
      <Plan />
      <Models />
      <Choose />
      <Testimonials />
      <MuAccordion />
      <Footer />
    </>
  );
}

export default App;
