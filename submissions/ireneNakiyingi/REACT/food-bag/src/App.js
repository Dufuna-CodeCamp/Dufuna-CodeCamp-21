import CartPage from './components/Cart'
import Verification from './components/Verification';
import { Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div >
      
      
          <Routes>
            <Route path='/' exact element={<CartPage/>} />

            <Route path='/Verification' element={<Verification/>} ></Route>
          </Routes>
      
    </div>
  );
}

export default App;
