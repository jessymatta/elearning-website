import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import Register from "../../components/register-form/Register";
import SidebarInstr from "../../components/sidebar/SidebarInstr";

const AdminAddStudent = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container">
                <Title title={"Add Student"}/>
                
                <div className="table-container">
                    <div className="table-title">Basic information</div>
                    <Register api_path={"register_student"} route={"instructor/students"} role={"instructor"}/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminAddStudent