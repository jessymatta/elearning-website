import "./table.css";
import axios from "axios";

const Table = () => {

    const token=localStorage.getItem('token');
    console.log("--------- "+token);
    function getAllInstructors() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/v0.1/admin/all_students",
            headers: {Authorization: `Bearer${token}`},
        }).then((response)=> {
            console.log(response);

        }).catch((error) => {
            console.log(error.message);
        });
    }
    getAllInstructors();
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joining Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>

                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>

                    <tr>
                        <td>2022001</td>
                        <td>Instr. Name</td>
                        <td>Instr. Email</td>
                        <td>2022-Oct-03</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table