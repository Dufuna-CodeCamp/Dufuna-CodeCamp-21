import './App.css';
import CartPage from './pages/CartPage';
import VerificationPage from './pages/VerificationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <Router className="App">
      

      <Routes>
          <Route exact path='/' element={<CartPage />}></Route>
          <Route exact path='/cartpage' element={<CartPage />}></Route>
          <Route exact path='/verificationpage' element={<VerificationPage />}></Route>
          {/* <Route exact path='/login' element={<Login />}></Route> */}
          {/* <Route exact path='/demo' element={<Demo />}></Route> */}
      </Routes>


    </Router>
  );
}

export default App;
