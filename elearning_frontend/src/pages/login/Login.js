import React, { useState, useEffect, useRef } from 'react';
function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState(''); //Error we get back when we try to authenticate
    

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])



    return (
        <section>
            <p red={errMsg} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form >
                {/* Username input */}
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" ref={userRef}
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
    );
}

export default Login;
