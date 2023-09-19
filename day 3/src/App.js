import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Elogin from './Elogin'
import ALogin from './ALogin'
function App() {
  return (
   
   <div>
    <BrowserRouter>
    <Routes>
      
      
      <Route path="/elogin" element={<Elogin/>}/>
      <Route path="/alogin" element={<ALogin/>}/>
    </Routes>
    </BrowserRouter>
   </div>
    
  );
}

export default App;