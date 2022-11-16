import CartPage from './components/cartPage';
import '../src/App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />

        <Routes>
          <Route path='/' element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
