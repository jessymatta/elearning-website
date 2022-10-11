import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import Register from "../../components/register-form/Register";
import SidebarInstr from "../../components/sidebar/SidebarInstr";

const InstructorAddStudent = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container">
                <Title title={"Add Student"}/>
                
                <div className="table-container">
                    <div className="table-title">Basic information</div>
                    <Register api_path={"register_student"} route={"instructor"} role={"instructor"}/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAddStudent