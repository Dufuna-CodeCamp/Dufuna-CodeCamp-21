import image4 from './Images/image4.svg';
import image3 from './Images/image3.svg';
import image1 from './Images/image1.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  
  	// THIS IS CART ITEMS
  	const products = [
		{
			product_id:0,
			product_name:'KFC - King Bucket',
			image : image4,
			price : 5000,
			quantity: 2,
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
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
