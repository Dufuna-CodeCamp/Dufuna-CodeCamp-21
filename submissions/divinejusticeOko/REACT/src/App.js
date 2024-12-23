import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutLayout from './layouts/CheckoutLayout';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Cart />} />
      <Route path='cart' element={<CheckoutLayout />}>
        <Route path='verification' element={<CheckoutPage />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
