import Login from './pages/login/Login';
import StudentDashboard from './pages/student/StudentDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboardInstructors from './pages/admin/AdminDashboardInstructors';
import AdminDashboardStudents from './pages/admin/AdminDashboardStudents';
import AdminAddInstructor from './pages/admin/AdminAddInstructor';
import AdminAddStudent from './pages/admin/AdminAddStudent';
import AdminDashboardCourses from './pages/admin/AdminDashboardCourses';
import AdminAddCourse from './pages/admin/AdminAddCourse';
import InstructorDashboardStudents from './pages/instructor/InstructorDashboardStudents';
import InstructorAddStudent from './pages/instructor/InstructorAddStudent';
import InstructorAllAssign from './pages/instructor/InstructorAllAssign';
import InstructorAddAssign from './pages/instructor/InstructorAddAssign';
import InstructorAllAnnoun from './pages/instructor/InstructorAllAnnoun';
import InstructorAddAnnouncement from './pages/instructor/InstructorAddAnnounc';

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
              <Route path="courses" element={<AdminDashboardCourses />} />
              <Route path="add_instructor" element={<AdminAddInstructor/>} />
              <Route path="add_student" element={<AdminAddStudent/>} />
              <Route path="add_course" element={<AdminAddCourse/>} />
            </Route>

            <Route path="instructor">
              <Route index element={<InstructorDashboardStudents />} />
              <Route path="add_student" element={<InstructorAddStudent/>} />
              <Route path="all_assignments" element={<InstructorAllAssign/>} />
              <Route path="add_assignment" element={<InstructorAddAssign/>} />

              <Route path="all_announcements" element={<InstructorAllAnnoun/>} />

              <Route path="add_announcements" element={<InstructorAddAnnouncement/>} />
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
