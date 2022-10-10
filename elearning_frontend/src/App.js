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

          <Route path="/">

            <Route index element={<Login />} />

            <Route path="admin">
              <Route index element={<AdminDashboardInstructors />} />
              <Route path="students" element={<AdminDashboardStudents />} />
            </Route>

            <Route path="instructor">
              <Route index element={<InstructorDashboard />} />
            </Route>

            <Route path="student">
              <Route index element={<StudentDashboard />} />
            </Route>

          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
