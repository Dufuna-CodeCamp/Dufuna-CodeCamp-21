
import './App.css';
import { Header } from './components/header';
import { Body } from './components/CartTitle';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {CartContent} from './components/CartContent'
import { VerificationHolder } from './components/VerificationHolder';


function App() {


  return (
    <div>
    
     <Router>
       <Routes>
          <Route path="/" element={<CartContent  />} />

          <Route path="/Verification" element={<VerificationHolder />} />
       </Routes>
       
     </Router>
     
    </div>
    
    
  );
}

export default App;
