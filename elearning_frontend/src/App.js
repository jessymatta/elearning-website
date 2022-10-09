import React, { useState } from 'react';
import Login from './pages/login/Login';
import HomePage from './pages/homepage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* Route of the login page*/}
        <Route path="/login" element={<Login />}></Route>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
