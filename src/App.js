import Login from "./Pages/Login";
import"./App.css"
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
return(
  <BrowserRouter>
        
        <Routes>
<<<<<<< HEAD
            <Route path="/"  index element ={<Login/>}/>
            <Route path="/Dashboard" element={<Dashboard/>} />
=======
          
          <Route  path = "/" index element={<Login />}/>
            
            <Route path="/Dashboard" element={<Dashboard/>} />
            
        
          
        
>>>>>>> 65617ead2abe49978d28059c1faf3741a0a896f4
        
        </Routes>
      </BrowserRouter>
  
  
)

};


export default App;
