import "./table.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableAssignInstr = () => {

    const token = localStorage.getItem('token');
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const getAssignments = async () => {
            const assignment_from_server = await getAssignmentsAPI();
            setAssignments(assignment_from_server);
        }
        getAssignments();
    }, []);


    const getAssignmentsAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/v0.1/instructor/all_assignments",
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.instructor_assignments;
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
                        <th>Course CRN</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {assignments.map((assignment) => (
                        <tr key={assignment._id}>
                            <td>{assignment.crn}</td>
                            <td>{assignment.description}</td>
                            <td>{assignment.due_date}</td>
                            <td>{(assignment.created_at).split('T')[0]}</td>
                            <td><FontAwesomeIcon className="edit-icon" icon={faPen}/><FontAwesomeIcon className="delete-icon gray" icon={faTrash}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableAssignInstr