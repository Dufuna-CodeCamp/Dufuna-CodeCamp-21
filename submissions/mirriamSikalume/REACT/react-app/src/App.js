
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {CartContent} from './components/CartContent'
import { SuccessHolder } from './components/SuccessHolder';
import { VerificationHolder } from './components/VerificationHolder';


function App() {


  return (
    <div>
    
     <Router>
       <Routes>
          <Route path="/" element={<CartContent  />} />

          <Route path="/Verification" element={<VerificationHolder />} />

          <Route path="/success" element={<SuccessHolder />} />
       </Routes>
       
     </Router>
     
    </div>
    
    
  );
}

export default App;
