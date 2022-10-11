import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import TableStudents from "../../components/table/TableStudents";
import SidebarInstr from "../../components/sidebar/SidebarInstr";

const InstructorDashboardStudents = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container">
                <Title title={"Students List"}/>
                
                <div className="table-container">
                    <div className="table-title">All instructors</div>
                    <TableStudents/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorDashboardStudents