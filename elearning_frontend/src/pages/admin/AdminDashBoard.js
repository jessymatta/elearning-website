import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';

const AdminDashboard = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Instructors List"}/>
                container
            </div> 
        </div>
    )
}

export default AdminDashboard