import "./App.css";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { HomePage } from "./Components/HomePage/HomePage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Portfolio } from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
