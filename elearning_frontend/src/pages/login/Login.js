import React, { useState, useEffect, useRef } from 'react';
import "./login.css"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); //Error we get back when we try to authenticate
    // TODO this is when we authenticate
    const [success, setSucess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])

    const submitForm = async (e) => {
        e.preventDefault(); console.log(user, password);
        setUser('');
        setPassword('');
        setSucess(true);
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
                        <form onSubmit={submitForm}>
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
