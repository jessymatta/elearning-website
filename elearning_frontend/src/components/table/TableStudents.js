import "./table.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableStudents = ({role}) => {

    const token = localStorage.getItem('token');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getStudents = async () => {
            const student_from_server = await getStudentsAPI();
            setStudents(student_from_server);
        }
        getStudents();
    }, []);


    const getStudentsAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: `http://127.0.0.1:8000/api/v0.1/${role}/all_students`,
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.students;
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function deleteStudent(id){
        // console.log("this "+id);
    }

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admission Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student._id}>
                            <td>{student.uni_id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{(student.created_at).split('T')[0]}</td>
                            <td><FontAwesomeIcon className="edit-icon" icon={faPen}/><FontAwesomeIcon onClick={deleteStudent(student._id)} className="delete-icon gray" icon={faTrash}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableStudents