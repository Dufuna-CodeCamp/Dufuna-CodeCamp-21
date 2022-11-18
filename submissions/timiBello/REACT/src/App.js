import CartPage from './components/cartPage';
import '../src/App.css';
import Nav from './components/Nav';
import Verification from './components/Verification';
import OrderSuccessful from './components/OrderSuccessful';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />

        <Routes>
          <Route path='/' element={<CartPage />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/OrderSuccessful' element={<OrderSuccessful />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
