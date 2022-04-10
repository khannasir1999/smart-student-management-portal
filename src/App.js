import Login from "./Pages/Login";
import"./App.css"
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
return(
  <BrowserRouter>
        
        <Routes>
          
          <Route  path = "/" index element={<Login />}/>
            
            <Route path="/Dashboard" element={<Dashboard/>} />
            
        
          
        
        
        </Routes>
      </BrowserRouter>
  
  
)

};


export default App;
