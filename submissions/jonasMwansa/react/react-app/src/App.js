import image1 from './image_assets/image1.svg'
import image2 from './image_assets/image3.svg'
import image3 from './image_assets/image4.svg'
import NavigationItem from './components/Navigation';
import Sublink from "./components/Sublink";

import CartContainer from "./components/CartContainer";


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
          <NavigationItem />
          <Sublink />
          <CartContainer  products={products} />
          <hr/>
        
      </div>);
}
export default App;
