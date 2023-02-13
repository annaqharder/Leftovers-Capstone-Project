import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory, Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
    import {eyeOff} from 'react-icons-kit/feather/eyeOff';
    import {eye} from 'react-icons-kit/feather/eye'

function Signup() {
    const [errors, setErrors] = useState([]);

    let { setUser } = useContext(UserContext);
    let history = useHistory();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

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
        <section class="container p-0 ml-6 mr-2 overflow-hidden">
        <div class= "p-0 flex justify-around items-start flex-wrap h-full text-gray-800 w-screen">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 mt-10">
                <img src="./images/restaurant11.webp" alt="signupImg"/>
            </div>
            <div class="md:w-8/12 lg:w-4/12 mb-12 mr-28 p-20 mt-44">
                <h2 class="font-sans font-family:'Raleway' text-4xl tracking-tight">create your account</h2>
                <form onSubmit={handleSignup}>
                <div>
                        <div>
                                <br></br>
                            <div class="mb-2">
                                <input
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    value={credentials.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div>
                            <div class="mb-2">
                                <input
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    value={credentials.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div>
                            <div class="mb-2">
                                <input
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                    type="text"
                                    inputMode='email'
                                    name="email"
                                    placeholder="Email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                            <div>
                            <div class="mb-2 flex">
                                <input
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                    type={type}
                                    name="password"
                                    placeholder="Password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                                <span class="flex justify-around items-center" onClick={handleToggle}><Icon class="absolute mr-10" icon={icon} size={25}/></span>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div>
                            <div>
                            <div class="flex">
                                <input
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                    type={type}
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    value={credentials.password_confirmation}
                                    onChange={handleChange}
                                    autoComplete="current-password"
                                />
                                <span class="flex justify-around items-center" onClick={handleToggle}><Icon class="absolute mr-10" icon={icon} size={25}/></span>
                            </div>
                        </div>
                    </div>
                        <br></br>

                    <div class="font-bold">
                        {errors.map((err) => (
                            <p key={err}>{err}</p>
                        ))}
                    </div>

                    <button
                        type="submit"
                        class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-green hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-full"
                    >Create Account</button>
                        <br></br>
                        <br></br>
                    <label>Already have an account?</label>
                    <Link onClick={handleToLoginPage} class="ml-2">Login</Link>
                </form>
            </div>
        </div>
        </section>
    );
}

export default Signup;