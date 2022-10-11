import "./register.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

    const token = localStorage.getItem('token');
    const [crn, setCRN] = useState("");
    const [course_name, setCourseName] = useState("");
    const [instructor, setInstructor] = useState("");
    const navigate = useNavigate();
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const getinstructors = async () => {
            const instructors_from_server = await getinstructorsAPI();
            setInstructors(instructors_from_server);
        }
        getinstructors();
    }, []);

    //When the submit button is clicked
    const submitCourse = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("crn", crn);
        data.append("course_name", course_name);
        data.append("instructor", instructor);

        await axios({
            method: "post",
            url: `http://127.0.0.1:8000/api/v0.1/admin/add_course`,
            data: data,
            headers: { Authorization: `Bearer${token}` },
        })
            .then(function (response) {

                if (response.status === 201) {
                    navigate(`/admin/courses`);
                }

            })
            .catch((error) => {
                console.log(error.message);
            });
    };

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

    getinstructorsAPI();

    //When the cancel button is clicked
    const cancelInputs = (e) => {
        e.preventDefault();
        setCRN('');
        setCourseName('');
    };

    return (
        <form onSubmit={submitCourse} className="registration-form">
            <label htmlFor="crn">CRN <span className="red">*</span></label>
            <input type="text" name="crn" id="crn" required="required" placeholder="Enter course crn"
                onChange={(e) => {
                    setCRN(e.target.value);
                }}
                value={crn} />

            <label htmlFor="course_name">Course Name <span className="red">*</span></label>
            <input type="text" name="course_name" id="course_name" required="required" placeholder="Enter course name"
                onChange={(e) => {
                    setCourseName(e.target.value);
                }}
                value={course_name} />

            <label for="instructors">Assign to an instructor:</label>
            <select name="instructors" id="instructors" onChange={(e) => {
                    setInstructor(e.target.value);
                }}
                value={instructor}>
                    <option selected="true" disabled="disabled">Assign to an instructor</option>
            {instructors.map((instructor) => (
                    <option value={[instructor.name, instructor._id]}>{instructor.name}</option>
            ))}
            </select>

            <div className="action-btns">
                <button type="submit" className="green-background">Submit</button>
                <button onClick={cancelInputs} className="red-background margin-left">Cancel</button>
            </div>
        </form>
    )
}

export default AddCourse