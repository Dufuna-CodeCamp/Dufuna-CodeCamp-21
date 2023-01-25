import { crp, kfc } from './data';
import Kfc from './images/kfc.png';
import Crp from './images/crp.png';
import './vendor.css';
import KfcFood from './KfcFood';
import ChickenFood from './ChickenFood';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { MdOutlineNavigateNext } from 'react-icons/md';

function Vendor() {
  const dispatch = useDispatch();

  const handleAddToCart = (items) => {
    dispatch(addToCart(items));
  };

  return (
    <div className="vendor">
      <div className="head_link">
        <p>Home</p> <MdOutlineNavigateNext className="head_link_next" />{' '}
        <h4>Vendors</h4>
      </div>

      <h1>All Vendors</h1>
      <div className="kfc">
        <div className="kfc_logo">
          <img src={Kfc} alt="kfc" /> <h2>KFC</h2>
        </div>
        <div className="kfc_stock">
          {kfc.map((food) => (
            <KfcFood
              food={food}
              key={food.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <div className="hr"></div>
      <div className="kfc,chi">
        <div className="kfc_logo">
          <img src={Crp} alt="Chicken republic" /> <h2>Chicken republic</h2>
        </div>
        <div className="kfc_stock">
          {crp.map((food) => (
            <ChickenFood
              food={food}
              key={food.id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vendor;
