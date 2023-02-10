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
        <section>
            <div class="container px-6 py-12 h-full">
                <div class = "flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src="./images/restaurant13.webp" alt="loginImg"/>
                    </div>
                    <div>
                        <div>
                            <h2>Please Sign In</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <br></br>
                                    <div className="wrapper">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                inputMode="email"
                                                name="email"
                                                placeholder="Email"
                                                value={credentials.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <br></br>
                                    <div className="wrapper">
                                        <div className='input-field'>
                                            <input
                                                type={type}
                                                name="password"
                                                placeholder="Password"
                                                value={credentials.password}
                                                onChange={handleChange}
                                                autoComplete="current-password"
                                            />
                                            <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <input
                                            type="checkbox"
                                        />
                                        <label>Remember me</label>
                                    </div>
                                    <a href="#!"> Forgot Password?</a>
                                </div>

                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-zinc text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                >LOG IN</button>
                            </form>
                        </div>

                        <br></br>
                        <div>
                            <label>Don't have an account?</label>
                            <Link onClick={handleToSignupPage}>Sign up</Link>
                        </div>
                        </div>
                        </div>

                        <div>
                            {errors.map((err) => (
                                <p key={err}>{err}</p>
                            ))}
                        </div>

                    </div>
        </section>
    );
}

export default Login;