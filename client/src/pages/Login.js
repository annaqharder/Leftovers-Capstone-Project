import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory, Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
    import {eyeOff} from 'react-icons-kit/feather/eyeOff';
    import {eye} from 'react-icons-kit/feather/eye'


function Login() {
    const [errors, setErrors] = useState([]);
    let { user, setUser } = useContext(UserContext);
    let history = useHistory();


    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

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

    const handleToggle = () => {
        if (type==='password'){
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div>
            <h1> Leftovers </h1>
            <form onSubmit={handleSubmit}>
                <h2>welcome back!</h2>

                    <div>
                        <div className="wrapper">
                            <label>Email: </label>
                            <div className="input-field">
                                <input
                                    type="text"
                                    name="email"
                                    // placeholder="enter your email..."
                                    value={credentials.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <br></br>
                        <div className="wrapper">
                        <label>Password: </label>
                            <div className='input-field'>
                                <input
                                    type={type}
                                    name="password"
                                    placeholder="enter your password..."
                                    value={credentials.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                                <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <button type="submit">Login</button>
            </form>
            <br></br>
            <div>
                <label>Don't have an account?</label>
                <Link onClick={handleToSignupPage}>Sign up</Link>
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