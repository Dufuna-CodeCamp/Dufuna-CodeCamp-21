import { Route,Routes } from 'react-router-dom';
import './App.css';
import Verification from './page/verification/Verification';
import Data from './Data';
import { Cart } from './page/cartPage/Cart';
import Sucess from './page/sucessPage/Sucess';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Data/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='verification' element={<Verification/>}/>
        <Route path='sucess' element={<Sucess/>}/>
      </Routes>
      </div>
  )
}

export default App;
