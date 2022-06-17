import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ComponentsHolder from './components/ComponentsHolder'
import { VerificationComponentsHolder } from "./components/VerificationComponentHolder"
import { OrderMainComponentHolder } from "./components/OrderMainComponentHolder"
import './App.css'

function App() {
  return (
      <div>
        <Router>

          <Routes>

              <Route path="/"  element = { <ComponentsHolder />} />

              <Route path="VerificationComponentsHolder"  element = { <VerificationComponentsHolder />} />

              <Route path="OrderMainComponentHolder"  element = { <OrderMainComponentHolder />} />


          </Routes>
   

        </Router>
         
      </div>
      
  );
}
export default App;
