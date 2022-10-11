import Title from "../../components/header/Title";
import '../admin/admindash.css';
import Footer from "../../components/footer/Footer";
import SidebarInstr from "../../components/sidebar/SidebarInstr";
import AddAnnouncement from "../../components/register-form/AddAnnouncement";

const InstructorAddAnnouncement = () => {
    return (
        <div class="admin-dash">
            <SidebarInstr/>
            <div className="dash-container smaller">
                <Title title={"Add Announcement"}/>
                
                <div className="table-container">
                    <div className="table-title">Announcement Details</div>
                    <AddAnnouncement/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default InstructorAddAnnouncement