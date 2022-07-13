import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Holder from "./components/Holder";
import { VerificationHolder } from "./components/VerificationHolder";
import ManageContext from "./Context/main";
import { OrderHolder } from "./components/OrderHolder";



function App() {

  return (

    <div>
    <ManageContext >
     
  
    </ManageContext>

  <Router>

  <Routes>
 
  <Route path="/"  element = { <Holder />} />
  
  <Route path="VerificationHolder"  element = { <VerificationHolder />} />
  <Route path="OrderHolder" element = {<OrderHolder/>} />

  </Routes>
     

  </Router>
  
  </div>
       
      
  );
}

export default App;