import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
