import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import SidebarInstr from "../../components/sidebar/SidebarInstr";
import TableAssignInstr from "../../components/table/TableAssignInstr";

const InstructorAllAssign = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container smaller">
                <Title title={"My Posted Assignments List"}/>
        
                <div className="table-container">
                    <div className="table-title">All Assignments</div>
                    {/* <TableStudents role={"instructor"}/> */}
                    <TableAssignInstr/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAllAssign