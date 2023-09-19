import './App.css';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import logo from './images/FoodBag.png'



function App() {


  return (
    <div className="App">
      <Navbar
      logo = {logo}
      navItem1 = 'Cart'
      navItem2 = 'Login'
      navItem3 = 'Sign up'
      home = 'Home' 
      category = 'Cart'
      />
      
      <CartPage />


    </div>
  );
}

export default App;
