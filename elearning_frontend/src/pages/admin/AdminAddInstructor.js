import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import TableInstructors from "../../components/table/TableInstructors";

const AdminAddInstructor = () => {
    return (
        <div class="admin-dash">
            <Sidebar/>
            <div className="dash-container">
                <Title title={"Add Instructor "}/>
                
                <div className="table-container">
                    <div className="table-title">Basic information</div>
                    {/* <TableInstructors/> */}
                    FORM
                </div>
                <Footer/>
            </div> 
        </div>
    )
}

export default AdminAddInstructor