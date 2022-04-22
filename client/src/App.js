import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from './Screen/HomeScreen';
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import React, { Component }  from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>}></Route>
        <Route path='/register' element={<RegisterScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
