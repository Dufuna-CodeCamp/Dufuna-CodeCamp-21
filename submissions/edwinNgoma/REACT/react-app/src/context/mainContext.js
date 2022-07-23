
import React, {createContext} from "react";

 export const MainContext = createContext();

 const ManageContext = (props) =>{
  

   return(
     <MainContext.Provider value={{}}>
     {props.children}
     </MainContext.Provider>
   )
}

export default ManageContext;