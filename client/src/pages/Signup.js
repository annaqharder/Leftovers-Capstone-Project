import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory, Link } from 'react-router-dom';

function Signup() {
    const [errors, setErrors] = useState([]);

    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value
            }
        })
    };

    function handleSignup(e) {
        e.preventDefault();
        setErrors([]);

        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                history.push("/home");
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        },[])
    }

    function handleToLoginPage() {
        history.push("/")
    }

    return (
        <div>
            <div>
                <h1>create your account</h1>
                <form onSubmit={handleSignup}>
                <div>
                        <label>First Name: </label>
                            <br></br>
                        <input
                            type="text"
                            name="first_name"
                            // placeholder="enter your first name..."
                            value={credentials.first_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Last Name: </label>
                            <br></br>
                        <input
                            type="text"
                            name="last_name"
                            // placeholder="enter your last name..."
                            value={credentials.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                            <br></br>
                        <input
                            type="text"
                            name="email"
                            // placeholder="enter your email..."
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Password: </label>
                            <br></br>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                    </div>

                    <div>
                        <label>Confirm Password: </label>
                            <br></br>
                        <input
                            type="password"
                            name="password_confirmation"
                            value={credentials.password_confirmation}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                    </div>

                        <br></br>
                    <button type="submit">Create Account</button>
                        <br></br>
                        <br></br>
                    <label>Already have an account?</label>
                    <Link onClick={handleToLoginPage}>Login</Link>
                </form>

                    <div>
                        {errors.map((err) => (
                            <p key={err}>{err}</p>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default Signup;