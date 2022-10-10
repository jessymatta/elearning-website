import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";

const AdminDashboard = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Instructors List"}/>
                
                <div className="table-container">
                    <div className="table-title">All instructors</div>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminDashboard