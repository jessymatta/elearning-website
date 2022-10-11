import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import SidebarInstr from "../../components/sidebar/SidebarInstr";
import AddAssignment from "../../components/register-form/AddAssignment";

const InstructorAddAssign = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container smaller">
                <Title title={"Add Assignment"}/>
                
                <div className="table-container">
                    <div className="table-title">Assignment Details</div>
                    <AddAssignment/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAddAssign