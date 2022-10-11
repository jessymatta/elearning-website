import "./table.css";
import axios from "axios";
import { useState, useEffect } from "react";

const TableInstructors = () => {

    const token = localStorage.getItem('token');
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const getinstructors = async () => {
            const student_from_server = await getinstructorsAPI();
            setInstructors(student_from_server);
        }
        getinstructors();
    }, []);


    const getinstructorsAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/v0.1/admin/all_instructors",
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.instructors;
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='table'>
            {/* <div>{JSON.stringify(instructors)}</div> */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {instructors.map((student) => (
                        <tr>
                            <td>{student.uni_id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{(student.created_at).split('T')[0]}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableInstructors