import Adminpage from "./components/Admin/adminpage";
import AuthenticationForm from "./components/Auth/authentication";
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import {auth} from './firebase';



function App() {
  const [IsAuthenticated,setIsAuthenticated] = useState(false);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setIsAuthenticated(true);
      }
      else{
        setIsAuthenticated(false);
      }
    }) 
  },[])
  return (
    
<>
  <BrowserRouter>
      <Routes>
        <Route path='/' element = {<AuthenticationForm/>}></Route>
        <Route path="/admin" element = {<Adminpage name={IsAuthenticated}/>}></Route>
        
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
