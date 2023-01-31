import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';

function Login() {
    const [errors, setErrors] = useState([]);
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        setCredentials((prevCredentials) => {
            return {
                ...prevCredentials,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then((r) => {
            if (r.ok) {
                r.json().then((currentUser) => setUser(currentUser));
                history.push("/home")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        }, []);
    }

    function handleToSignupPage() {
        history.push("/signup")
    }

    return (
        <div>
            <h1> Leftovers </h1>
            <form onSubmit={handleSubmit}>
                <h2>welcome back!</h2>
                    <div>
                        <label>Email</label>
                        <br></br>
                        <input
                            type="text"
                            name="email"
                            placeholder="enter your email..."
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
                            placeholder="enter your password..."
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>

                    <br></br>
                    <button type="submit">Login</button>
            </form>
            <br></br>
            <div>
                <label>Don't have an account?</label>
                <button onClick={handleToSignupPage}>Sign up</button>
            </div>

            <div>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>

        </div>
    );
}

export default Login;