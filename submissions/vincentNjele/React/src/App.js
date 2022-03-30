
import ComponentsHolder from "./components/ComponentsHolder";
import ManageContext from "./context/mainContext";



function App() {

  return (
    <div >
       
       <ManageContext>
        <ComponentsHolder />
       </ManageContext>
    </div>
  );
}

export default App;
