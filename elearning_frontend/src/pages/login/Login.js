import React, { useState, useEffect, useRef } from 'react';
import "./login.css"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); //Error we get back when we try to authenticate
    // TODO this is when we authenticate
    const [success, setSucess] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const login = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('username', user);
        data.append('password', password);

        await axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v0.1/login",
            data: data
        }).then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                console.log("successful login");
                console.log(response.data.access_token);
                console.log(response.data.user._id);
                console.log(response.data.user);
                console.log("dude");
                localStorage.setItem('id', response.data.user._id);
                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                console.log(response.data.user.user_type);
                const user_type = response.data.user.user_type;

                if (user_type === 'admin') {
                    setSucess(true);
                    navigate('/admin/dashboard');
                }

                // eslint-disable-next-line default-case
                switch (user_type) {
                    case "admin":
                        navigate('/admin/dashboard');
                        break;
                    case "instructor":
                        // code block
                        break;
                    case "student":
                        // code block
                        break;
                }

            }
        })
        // setUser('');
        // setPassword('');
        // setSucess(true);
    }







    return (
        <>
            {success ? (
                <div class="success-login">
                    <FontAwesomeIcon className="check-mark" icon={faCircleCheck} />
                    <h1>Login Successful</h1>

                    {/* Route to go to the corresponding page */}
                </div>
            ) : (
                <div className='login-page'>
                    <section>
                        <p red={errMsg} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Login</h1>
                        <form onSubmit={login}>
                            {/* Username input */}
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" ref={userRef} autoComplete="off"
                                onChange={(e) => {
                                    setUser(e.target.value)
                                }} value={user}
                                required
                                placeholder='Enter your Username' />

                            {/* Password input */}
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }} value={password}
                                required
                                placeholder='Enter your password' />

                            {/*Login button */}
                            <button>Login</button>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
}

export default Login;
