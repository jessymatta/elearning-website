import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import TableInstructors from "../../components/table/TableInstructors";

const AdminDashboardInstructors = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Instructors List"}/>
                
                <div className="table-container">
                    <div className="table-title">All instructors</div>
                    <TableInstructors/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminDashboardInstructors