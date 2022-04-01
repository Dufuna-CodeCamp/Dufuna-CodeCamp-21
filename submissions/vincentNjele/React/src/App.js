import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComponentsHolder from "./components/ComponentsHolder";
import { VerificationComponentsHolder } from "./components/VerificationComponentHolder";
import ManageContext from "./context/mainContext";



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
