import './sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
                    <li><span>All Instructors</span></li>
                    <li><span>Add Instructors</span></li>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faUsers}/>STUDENTS</p>
                    <li><span>All Students</span></li>
                    <li><span>Add Student</span></li>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faBook}/>COURSES</p>
                    <li><span>All Courses</span></li>
                    <li><span>Add Course</span></li>
                </ul>
            </div>

            <div className='bottom'><FontAwesomeIcon className="sidebar-icon btm-icon" icon={faArrowRightFromBracket} />logout</div>
        </div>
    )
}

export default Sidebar