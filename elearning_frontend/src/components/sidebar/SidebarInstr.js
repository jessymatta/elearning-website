import './sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFiles } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SidebarInstr = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")

    }
    const user = localStorage.getItem('user');
    const username = user.username;
    return (

        <div className='admin-sidebar'>
            <div className='top'>
                <span className='logo'>UNI L<span className=' logo green'>O</span>G<span className='logo green'>O</span></span>
                <span className='role'>Instructor</span>
                <span className='role'>@{username}</span>
            </div>

            <div className='center'>
                <ul>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faUsers} />STUDENTS</p>
                    <Link class="default-link" to="/admin/students">
                        <li><span>All Students</span></li>
                    </Link>
                    <Link class="default-link" to="/admin/add_student">
                        <li><span>Add Student</span></li>
                    </Link>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faBook} />ASSIGNMENTS</p>
                    <Link class="default-link" to="/admin"><li><span>All Assignments</span></li></Link>
                    <Link class="default-link" to="/admin/add_instructor"><li><span>Add Assignment</span></li></Link>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faFiles} />ANNOUNCEMENTS</p>
                    <Link class="default-link" to="/admin/courses">
                        <li><span>All Announcements</span></li>
                    </Link>
                    <Link class="default-link" to="/admin/add_course">
                        <li><span>Add Announcement</span></li>
                    </Link>
                </ul>
            </div>

            <div onClick={logout} className='bottom nav-title'><FontAwesomeIcon className="sidebar-icon btm-icon" icon={faArrowRightFromBracket} />LOGOUT</div>
        </div>
    )
}

export default SidebarInstr