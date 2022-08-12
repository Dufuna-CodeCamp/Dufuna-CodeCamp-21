import CartPage from './components/Cart'
import Verification from './components/Verification';
import Success from './components/Success'
import { Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      
      
          <Routes>
            <Route path='/' exact element={<CartPage/>} />

            <Route path='/Verification' element={<Verification/>} />
            <Route path='/Success' element={<Success/>} />
          </Routes>
      
    </div>
  );
}

export default App;
