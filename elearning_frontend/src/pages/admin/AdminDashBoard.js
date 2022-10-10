import Sidebar from "../../components/sidebar/Sidebar";
import './admindash.css';

const AdminDashboard = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">container</div> 
        </div>
    )
}

export default AdminDashboard