import Holder from './components/Holder';
import Navbar from './components/Navbar/Navbar';
import ManageContext from './Context/main'


function App() {
  return (
    <div>
        <ManageContext>
          <Navbar />
    < Holder />
      </ManageContext>
    </div>
  );
}

export default App
