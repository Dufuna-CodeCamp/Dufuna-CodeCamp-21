import image4 from './Images/image4.svg';
import image3 from './Images/image3.svg';
import image1 from './Images/image1.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';
import Verification from './Components/Verification';
import SuccessImage from './Images/success.svg';
import Success from './Components/Success';




function App() {
  
  	// CART ITEMS
  	const products = [
		{
			product_id:0,
			product_name:'KFC - King Bucket',
			image : image4,
			price : 5000,
			quantity: 1,
		},
		{
			product_id:1,
			product_name:'Refuel Max',
			image: image3,
			price: 1200,
			quantity: 1,
		},
		{   product_id:2,
			product_name:'Refuel Max',
			image: image1,
			price : 1200,
			quantity: 1,
		}
	]


  return (

    <div>
      <Router>
          <Routes> 
            <Route path='/' element={ <Cart  products={products} />} />
            <Route path="/Verification-page" element={ <Verification />} />
			<Route path="/success-page" element={ <Success image={SuccessImage} alt="delivering your order" title="Order successful" message="We have started processing your order" />} />
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
