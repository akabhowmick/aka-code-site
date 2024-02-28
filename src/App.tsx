import "./App.css";
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
      <Footer />
    </>
  );
}

export default App;
