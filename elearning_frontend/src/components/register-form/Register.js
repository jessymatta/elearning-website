import "./register.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ date_action }) => {

    const token = localStorage.getItem('token');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfPassword] = useState("");
    const navigate = useNavigate();

    //When the submit button is clicked
    const submitUser = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append("name", name);
        data.append("username", username);
        data.append("email", email);
        data.append("password", password);
        data.append("password_confirmation", confirm_password);

        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v0.1/admin/register_instructor",
            data: data,
            headers: { Authorization: `Bearer${token}` },
        })
            .then(function (response) {
                console.log(response.status);

                if (response.status === 201) {
                    console.log("successful whatever");
                    navigate("/admin");
                }

            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    //When the cancel button is clicked
    const cancelInputs = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setUsername('');
        setPassword('');
        setConfPassword('');
    };

    return (
        <form onSubmit={submitUser} className="registration-form">
            <label htmlFor="name">Name <span className="red">*</span></label>
            <input type="text" name="name" id="name" required="required" placeholder="Enter the name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
                value={name} />

            <label htmlFor="email">Email <span className="red">*</span></label>
            <input type="text" name="email" id="email" required="required" placeholder="Enter the email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email} />

            <label htmlFor="username">Username <span className="red">*</span></label>
            <input type="text" name="username" id="username" required="required" placeholder="Enter the username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                value={username} />

            <label htmlFor="password">Password <span className="red">*</span></label>
            <input type="password" name="password" id="password" required="required" placeholder="Enter the password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                value={password} />

            <label htmlFor="confirm_password">Confirm Password<span className="red">*</span></label>
            <input type="password" name="confirm_password" id="confirm_password" required="required" placeholder="Confirm password"
                onChange={(e) => {
                    setConfPassword(e.target.value);
                }}
                value={confirm_password} />

            <div className="action-btns">
                <button type="submit" className="green-background">Submit</button>
                <button onClick={cancelInputs} className="red-background margin-left">Cancel</button>
            </div>
        </form>
    )
}

export default Register