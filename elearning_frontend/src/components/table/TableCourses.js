import "./table.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableCourses = () => {

    const token = localStorage.getItem('token');
    const [students, setCourses] = useState([]);

    useEffect(() => {
        const getCourses = async () => {
            const student_from_server = await getCoursesAPI();
            setCourses(student_from_server);
        }
        getCourses();
    }, []);


    const getCoursesAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/v0.1/admin/all_courses",
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.courses;
            return data;
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>CRN</th>
                        <th>Name</th>
                        <th>Instructor</th>
                        <th>Create At</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.crn}</td>
                            <td>{student.course_name}</td>
                            <td>{student.instructor}</td>
                            <td>{(student.created_at).split('T')[0]}</td>
                            <td><FontAwesomeIcon className="edit-icon" icon={faPen}/><FontAwesomeIcon className="delete-icon gray" icon={faTrash}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCourses