import Sidebar from "../../components/sidebar/Sidebar";
import Title from "../../components/header/Title";
import './admindash.css';
import Footer from "../../components/footer/Footer";
import AddCourse from "../../components/register-form/AddCourse";

const AdminAddCourse = () => {
    return (
        <div class="admin-dash">
            <Sidebar />
            <div className="dash-container">
                <Title title={"Add Course "} />

                <div className="table-container">
                    <div className="table-title">Course Details</div>
                    <AddCourse />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default AdminAddCourse