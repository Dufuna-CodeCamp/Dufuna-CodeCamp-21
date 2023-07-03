import './App.css';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';
import logo from './images/FoodBag.png'
import kfc from './images/Rectangle28.png'
import chicken from './images/Group33.png'
import pot from './images/Rectangle281.png'
import scooter from './images/scooter 1.svg'
import Delivery from './components/Delivery';
import Total from './components/Total';


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
      <CartItem
          productImage = {kfc}
          productName = 'KFC - King Bucket'
          quantity = '0'
          price = {10000} 
      />
      <CartItem
          productImage = {chicken}
          productName = 'Refuel Max'
          quantity = '0'
          price = {1200}
      />
      <CartItem
          productImage = {pot}
          productName = 'Express Meal'
          quantity = '0'
          price = {1200} 
      />
      <Delivery 
      productImage = {scooter}
      productName = 'Delivery fee'
      price = {1200} />

      <Total
      price = {0} />

    </div>
  );
}

export default App;
