import Features from "./components/Features";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews/Reviews";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Categories />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
