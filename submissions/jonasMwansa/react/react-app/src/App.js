import image1 from './image_assets/image1.svg'
import image2 from './image_assets/image3.svg'
import image3 from './image_assets/image4.svg'
import success_image from './image_assets/success.svg'
import NavigationItem from './components/Navigation';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import CartContainer from "./components/CartContainer";
import Verification from './components/Verification';
import SuccesfullComponent from './components/SuccesfullComponent'

function App() {

    //data
    const products = [
        {
            product_id:0,
            product_name:'KFC - King Bucket',
            image : image1,
            price : 5000,
            quantity: 1,
        },
        {
            product_id:1,
            product_name:'Refuel Max',
            image: image2,
            price: 1200,
            quantity: 1,
        },
        {   product_id:2,
            product_name:'Refuel Max',
            image: image3,
            price : 1200,
            quantity: 1,
        }
    ]


  return (
      <div>
          <Router>
          <NavigationItem />
              <Routes>
                   <Route path='/' element={ <CartContainer  products={products} />} />
                   <Route path='/verification-page' element={ <Verification />  } />
                   <Route path='/success-page' element={ <SuccesfullComponent image={success_image}
                                                                                alt="guy delivering the order" 
                                                                                title='order successful'
                                                                                message='We have started processing your order.' />  } />
              </Routes>
          </Router>   
      </div>);
}
export default App;
