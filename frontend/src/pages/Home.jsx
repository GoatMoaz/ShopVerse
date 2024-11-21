import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Categories from "../components/Home/Categories/Categories";
import Contact from "../components/Home/Contact";
import BackToTop from "../components/UI/Buttons/BackToTop";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ShopVerse | Home</title>
        <meta
          name="description"
          content="Welcome to our homepage. Discover our features, categories, and contact us for more information."
        />
        <meta name="keywords" content="home, features, categories, contact" />
      </Helmet>
      <Hero />
      <BackToTop />
      <Features />
      <Categories />
      <Contact />
    </>
  );
};

export default HomePage;
