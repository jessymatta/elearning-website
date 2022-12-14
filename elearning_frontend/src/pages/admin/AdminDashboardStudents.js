import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import TableStudents from "../../components/table/TableStudents";

const AdminDashboardStudents = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Students List"}/>
                
                <div className="table-container">
                    <div className="table-title">All instructors</div>
                    <TableStudents role={"admin"}/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminDashboardStudents