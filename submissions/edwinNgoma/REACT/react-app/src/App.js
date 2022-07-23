import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentsHolder from "./components/ComponentsHolder";
import ManageContext from "./context/mainContext";
import { VerificationComponentsHolder } from "./components/VerificationComponentHolder";






function App() {

  return (

    <div>
    <ManageContext >
  
    </ManageContext>

  <Router>

  <Routes>
 
  <Route path="/"  element = { <ComponentsHolder />} />
  <Route path="VerificationComponentsHolder"  element = { <VerificationComponentsHolder />} />

  

  </Routes>
     

  </Router>
  
  </div>
       
      
  );
}

export default App;
