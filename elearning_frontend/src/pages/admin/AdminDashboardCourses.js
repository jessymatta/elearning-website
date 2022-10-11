import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import TableCourses from "../../components/table/TableCourses";

const AdminDashboardCourses = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Courses List"}/>
                
                <div className="table-container">
                    <div className="table-title">All Courses</div>
                    <TableCourses/>
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminDashboardCourses