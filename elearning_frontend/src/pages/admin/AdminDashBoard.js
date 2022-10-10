import Sidebar from "../../components/sidebar/Sidebar";

const AdminDashboard = () => {
    return (
        <div>
            <Sidebar/>
            <div className="dash-container"> This is the main page without the sidebar</div> 
        </div>
    )
}

export default AdminDashboard