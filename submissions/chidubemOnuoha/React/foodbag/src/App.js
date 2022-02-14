import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import RouterComponent from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <RouterComponent />
      </div>
    </Router>

  );
}

export default App;
