import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import SidebarInstr from "../../components/sidebar/SidebarInstr";
import TableAnnounc from "../../components/table/TableAnnounc";

const InstructorAllAnnoun = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container smaller">
                <Title title={"My Posted Announcements List"}/>
        
                <div className="table-container">
                    <div className="table-title">All Announcements</div>
                    <TableAnnounc/>
                    {/* <TableAssignInstr/> */}
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAllAnnoun