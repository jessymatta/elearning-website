import React, { useState } from 'react';
import Login from './pages/login/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* Route of the login page*/}
        <Route path="/" element={<Login />}></Route>
        {/* Route for the homepage */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
      </Routes>
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
