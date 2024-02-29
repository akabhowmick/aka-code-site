import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";
import { HomePage } from "../HomePage/HomePage";
import { Navbar } from "../Navbar/Navbar";
import { Portfolio } from "../Portfolio/Portfolio";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
