import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Categories from "../components/Home/Categories/Categories";
import Contact from "../components/Home/Contact";
import BackToTop from "../components/UI/Buttons/BackToTop";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BackToTop />
      <Features />
      <Categories />
      <Contact />
    </>
  );
};

export default HomePage;
