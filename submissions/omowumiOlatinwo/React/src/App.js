 import './styles.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Cart from "./Components/Cart";



function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Cart />
    </div>
  );
}

export default App;
