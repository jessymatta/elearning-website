import './sidebar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SidebarInstr = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user["username"];

    return (

        <div className='admin-sidebar'>
            <div className='top'>
                <span className='logo margin-top'>UNI L<span className=' logo green'>O</span>G<span className='logo green'>O</span></span>
                <span className='role'>Instructor</span>
                <span className='role'>@{username}</span>
            </div>

            <div className='center'>
                <ul>

                    <p class="nav-title margin-top-nav"><FontAwesomeIcon className="sidebar-icon" icon={faUsers} />STUDENTS</p>
                    <Link class="default-link" to="/instructor">
                        <li><span>All Students</span></li>
                    </Link>
                    <Link class="default-link" to="/instructor/add_student">
                        <li><span>Add Student</span></li>
                    </Link>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faFileCircleCheck} />ASSIGNMENTS</p>
                    <Link class="default-link" to="/instructor/all_assignments"><li><span>All Assignments</span></li></Link>
                    <Link class="default-link" to="/instructor/add_assignment"><li><span>Add Assignment</span></li></Link>

                    <p class="nav-title"><FontAwesomeIcon className="sidebar-icon" icon={faBullhorn} />ANNOUNCEMENTS</p>
                    <Link class="default-link" to="">
                        <li><span>All Announcements</span></li>
                    </Link>
                    <Link class="default-link" to="/instructor/add_announcements">
                        <li><span>Add Announcement</span></li>
                    </Link>
                </ul>
            </div>

            <div onClick={logout} className='bottom nav-title'><FontAwesomeIcon className="sidebar-icon btm-icon" icon={faArrowRightFromBracket} />LOGOUT</div>
        </div>
    )
}

export default SidebarInstr