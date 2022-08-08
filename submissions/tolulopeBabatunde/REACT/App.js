import CartPage from './components/CartPage';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom'
import Verification from './components/Verification';
import { Route, Routes } from 'react-router-dom'
import OrderSuccessful from './components/OrderSuccessful';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
