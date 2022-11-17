import CartPage from './components/cartPage';
import '../src/App.css';
import Nav from './components/Nav';
import Verification from './components/Verification';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
