import './App.css';
import Cart from './components/Cart';
import OrderSuccess from './components/OrderSuccess';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import products from './data';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Cart products={products} />} />
        <Route path="/success" element={<OrderSuccess/>} />
        <Route path="*" element={
          <main style={{ padding: "1rem"}}>
            <p style={{fontSize:"78px"}}>Page Not Found</p>
          </main>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
