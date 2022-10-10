import React, { useState } from 'react';
import Login from './pages/login/Login';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboardInstructors from './pages/admin/AdminDashboardInstructors';
import AdminDashboardStudents from './pages/admin/AdminDashboardStudents';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        {/* Route of the login page*/}
        <Route path="/" element={<Login />}></Route>
        {/* Route for admins dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboardInstructors />}></Route>
        <Route path="/admin/dashboard/students" element={<AdminDashboardStudents/>}></Route>
        {/* Route for instructors dashboard */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />}></Route>
        {/* Route for students dashboard */}
        <Route path="/students/dashboard" element={<StudentDashboard />}></Route>
      </Routes>
        {/* <Login /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
