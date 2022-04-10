import Login from "./Pages/Login";
import"./App.css"
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
return(
  <BrowserRouter>
        
        <Routes>
          
          <Route  path = "/" element={<Login />}>
            
            <Route path="/Dashboard" index element={<Dashboard/>} />
            
        
          
          </Route>
        
        </Routes>
      </BrowserRouter>
  
  
)

};


export default App;
