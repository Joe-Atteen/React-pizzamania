import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPizza from "./components/AboutPizza";
import PizzaTypes from "./components/PizzaTypes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutPizza title="About Pizza" />
      <PizzaTypes title="Pizza Types" />
      <Footer />
    </div>
  );
}

export default App;
