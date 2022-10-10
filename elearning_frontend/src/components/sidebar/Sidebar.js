import './sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='admin-sidebar'>
            <div className='top'>
                <span className='logo'>UNI L<span className=' logo green'>O</span>G<span className='logo green'>O</span></span>
                <span className='role'>Administrator</span>
            </div>

            <div className='center'>
                <ul>
                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faUser}/>INSTRUCTORS</p>
                    <Link class="default-link" to="/admin"><li><span>All Instructors</span></li></Link>
                    <Link class="default-link" to="/admin/add_instructor"><li><span>Add Instructors</span></li></Link>
                    
                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faUsers}/>STUDENTS</p>
                    <Link class="default-link" to="/admin/students">
                    <li><span>All Students</span></li>
                    </Link>
                    <Link class="default-link" to="/admin/add_student">
                    <li><span>Add Student</span></li>
                    </Link>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faBook}/>COURSES</p>
                    <Link class="default-link" to="/admin/courses">
                    <li><span>All Courses</span></li>
                    </Link>
                    <li><span>Add Course</span></li>
                </ul>
            </div>

            <div className='bottom nav-title'><FontAwesomeIcon className="sidebar-icon btm-icon" icon={faArrowRightFromBracket} />LOGOUT</div>
        </div>
    )
}

export default Sidebar