
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {CartContent} from './components/CartContent'
import { SuccessHolder } from './components/SuccessHolder';
import { VerificationHolder } from './components/VerificationHolder';
=======
import { Header } from './components/header';
import { Body } from './components/CartTitle';

import {CartContent} from './components/CartContent'
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a


function App() {


  return (
    <div>
    
<<<<<<< HEAD
     <Router>
       <Routes>
          <Route path="/" element={<CartContent  />} />

          <Route path="/Verification" element={<VerificationHolder />} />

          <Route path="/success" element={<SuccessHolder />} />
       </Routes>
       
     </Router>
     
=======
     <Header />
     <Body />
     <CartContent  />
>>>>>>> 2eb90bee17487d47e91c82c2efcc110b87686f3a
    </div>
    
    
  );
}

export default App;
