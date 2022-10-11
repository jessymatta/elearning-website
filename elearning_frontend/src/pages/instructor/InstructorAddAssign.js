import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import SidebarInstr from "../../components/sidebar/SidebarInstr";

const InstructorAddStudent = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container smaller">
                <Title title={"Add Assignment"}/>
                
                <div className="table-container">
                    <div className="table-title">Assignment Details</div>
                   
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAddStudent