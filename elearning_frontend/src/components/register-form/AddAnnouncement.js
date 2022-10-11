import "./register.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnnouncement = () => {

    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('id');;
    const [crn, setCRN] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDueDate] = useState("");
    const navigate = useNavigate();
    const [courses_crn, setCourseCRN] = useState([]);

    useEffect(() => {
        const getCourseCRN = async () => {
            const crn_from_server = await getCoursesCRNAPI();
            setCourseCRN(crn_from_server);
        }
        getCourseCRN();
    }, []);

    //When the submit button is clicked
    const submitCourse = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("crn", crn);
        data.append("description", description);
        data.append("due_date", due_date);

        await axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/v0.1/instructor/add_assignment`,
            data: data,
            headers: { Authorization: `Bearer${token}` },
        })
            .then(function (response) {

                if (response.status === 201) {
                    navigate(`/instructor/all_assignments`);
                }

            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const getCoursesCRNAPI = async () => {
        try {

            const results = await axios({
                method: "get",
                url: `http://127.0.0.1:8000/api/v0.1/instructor/instr_courses/${user_id}`,
                headers: { Authorization: `Bearer${token}` },
            });
            const data = await results.data.instructor_courses;
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    //When the cancel button is clicked
    const cancelInputs = (e) => {
        e.preventDefault();
        setDescription('');
    };

    return (
        <form onSubmit={submitCourse} className="registration-form">



            <label for="crn">Course CRN</label>
            <select name="crn" id="crn" onChange={(e) => {
                setCRN(e.target.value);
            }}
                value={crn}>
                <option selected="true" disabled="disabled">Choose a course</option>
                {courses_crn.map((course_crn) => (
                    <option>{course_crn.crn}</option>
                ))}
            </select>

            <label htmlFor="description">Description <span className="red">*</span></label>
            <input type="text" name="description" id="description" required="required" placeholder="Enter description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                value={description} />


            <label htmlFor="due_date">Due Date <span className="red">*</span></label>
            <input type="date" name="due_date" id="due_date" required="required"
                onChange={(e) => {
                    setDueDate(e.target.value);
                }}
                value={due_date} />

            <div className="action-btns">
                <button type="submit" className="green-background">Submit</button>
                <button onClick={cancelInputs} className="red-background margin-left">Cancel</button>
            </div>
        </form>
    )
}

export default AddAnnouncement