import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route  path="/" element={<LoginPage/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/home" element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
