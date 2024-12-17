import './App.css';
import ConsentScreen from './components/ConsentScreen';
import InputScreen from './components/InputScreen';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValidateToken from './components/ValidateToken';
import EndScreen from './components/EndScreen';
import React, { useState } from 'react'
import PrivateRoute from './components/PrivateRoute';
function App() {
  const [data, setdata] = useState({
      cudid: '',
      reuri: '',
      pversion: '',
      purpose: '',
      scope: ''
    })
  return (
    <div className="App">
      <MainLayout/>

     <BrowserRouter>
      <Routes>
<Route path="/" index element={< InputScreen data={data} setdata={setdata}/>}/>
<Route path='validate' element={<ValidateToken/>}/>
  <Route path='consent/:uid' element={<ConsentScreen data={data} setdata={setdata} />}/>
  <Route path='final' element={<EndScreen/>}/>

</Routes></BrowserRouter>
    </div>
  );
}

export default App;
