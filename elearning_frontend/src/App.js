import React, { useState } from 'react';
import Login from './pages/login/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* Route of the login page*/}
        <Route path="/" element={<Login />}></Route>
        {/* Route for admins dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        {/* Route for instructors dashboard */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />}></Route>
      </Routes>
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
