import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import Register from "../../components/register-form/Register";

const AdminAddStudent = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Add Student"}/>
                
                <div className="table-container">
                    <div className="table-title">Basic information</div>
                    <Register api_path={"register_student"} route={"admin/stucents"}/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminAddStudent