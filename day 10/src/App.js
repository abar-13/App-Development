import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import Main from './Components/Main';
import Schedule from './Components/Schedule';
import store from './store';
import PrivacyPolicy from './Components/PrivacyPolicy';
import View from './Components/View';
import Start from './Components/Start';
import TermsCondition from './Components/TermsCondition';
import Faq from './Components/Faq';
import Join from './Components/Join';



function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login onFormSwitch={handleFormSwitch} />} />

          <Route path="/register" element={<Register onFormSwitch={handleFormSwitch} />} />
          <Route path='/main' element={<Main onFormSwitch={handleFormSwitch}/>}/>
          <Route path='/schedule' element={<Schedule onFormSwitch={handleFormSwitch}/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy onFormSwitch={handleFormSwitch}/>}/>
          <Route path='/view' element={<View onFormSwitch={handleFormSwitch}/>}/>
          <Route path='/start' element={<Start onFormSwitch={handleFormSwitch}/>}/>
         <Route path='/termcondition' element={<TermsCondition onFormSwitch={handleFormSwitch}/>}/>
         <Route path='/faq' element={<Faq onFormSwitch={handleFormSwitch}/>}/>
         <Route path='/join' element={<Join onFormSwitch={handleFormSwitch}/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
