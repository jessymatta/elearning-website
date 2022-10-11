import "./register.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAssignment = () => {

    const token = localStorage.getItem('token');
    const [crn, setCRN] = useState("");
    const [description, setDescription] = useState("");
    const [due_date, setDueDate] = useState("");
    const navigate = useNavigate();
    const [instructor_courses, setInstructorCourses] = useState([]);

    // useEffect(() => {
    //     const getAssignments = async () => {
    //         const instructors_from_server = await getCoursesAPI();
    //         setAssignments(instructors_from_server);
    //     }
    //     getAssignments();
    // }, []);

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
// TODO get courses api according to the logged in user
    // const getCoursesAPI = async () => {
    //     try {

    //         const results = await axios({
    //             method: "get",
    //             url: "http://127.0.0.1:8000/api/v0.1/instructor/all_instructor_courses",
    //             headers: { Authorization: `Bearer${token}` },
    //         });
    //         const data = await results.data.instructors;
    //         return data;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // getCoursesAPI();

    // //When the cancel button is clicked
    // const cancelInputs = (e) => {
    //     e.preventDefault();
    //     setCRN('');
    //     setCourseName('');
    // };

    return (
        <form onSubmit={submitCourse} className="registration-form">
            <label htmlFor="crn">Course CRN <span className="red">*</span></label>
            <input type="text" name="crn" id="crn" required="required" placeholder="Enter course crn"
                onChange={(e) => {
                    setCRN(e.target.value);
                }}
                value={crn} />

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

            {/* <label for="instructors">Assign to an instructor:</label>
            <select name="instructors" id="instructors" placeholder="whatt? it worked" onChange={(e) => {
                    setCourseDescription(e.target.value);
                }}
                value={instructor}>
                    <option selected="true" disabled="disabled">Assign to an instructor</option>
            {instructors.map((instructor) => (
                    <option>{instructor.name}</option>
            ))}
            </select> */}

            <div className="action-btns">
                <button type="submit" className="green-background">Submit</button>
                <button  className="red-background margin-left">Cancel</button>
            </div>
        </form>
    )
}

export default AddAssignment