import "./table.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TableAnnounc = () => {

    const token = localStorage.getItem('token');
    const [announcements, setannouncements] = useState([]);

    useEffect(() => {
        const getAnnouncements = async () => {
            const announcement_from_server = await getAnnouncementsAPI();
            setannouncements(announcement_from_server);
        }
        getAnnouncements();
    }, []);


    const getAnnouncementsAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: "http://127.0.0.1:8000/api/v0.1/instructor/all_announcements",
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.instructor_announcements;
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
                        <th>Content</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {announcements.map((announcement) => (
                        <tr key={announcement._id}>
                            <td>{announcement.crn}</td>
                            <td>{announcement.content}</td>
                            <td>{(announcement.created_at).split('T')[0]}</td>
                            <td><FontAwesomeIcon className="edit-icon" icon={faPen}/><FontAwesomeIcon className="delete-icon gray" icon={faTrash}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableAnnounc