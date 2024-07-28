import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Store from "./components/Store/Store";
import About from "./components/About";
import Cart from "./components/Cart/Cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Store />
      <About />
    </>
  );
}

export default App;
