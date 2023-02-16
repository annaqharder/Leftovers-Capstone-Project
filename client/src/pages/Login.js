import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory, Link } from 'react-router-dom';
import {Icon} from 'react-icons-kit';
    import {eyeOff} from 'react-icons-kit/feather/eyeOff';
    import {eye} from 'react-icons-kit/feather/eye'


function Login() {
    const [errors, setErrors] = useState([]);
    let { setUser } = useContext(UserContext);
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
        <section class="container p-0 ml-6 mr-2">
            <div>
                <div class="p-0 flex justify-around items-start flex-wrap h-full text-gray-800 w-screen">
                    {/* <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 mt-10"> */}
                    <div class="object-cover w-96 scale-125 pt-28 ml-12 mb-28">
                        <img src="./images/restaurant13.webp" alt="loginImg"/>
                    </div>
                    <div class="md:w-8/12 lg:w-4/12 mb-12 mr-28 pt-24">
                        <div>
                            <h2 class="font-sans font-family:'Raleway' text-4xl tracking-tight">please log in</h2>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <br></br>
                                    <div>
                                        <div class="mb-2">
                                            <input
                                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-800 focus:outline-none"
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
                                    <div>
                                        <div class="mb-4 flex">
                                            <input
                                                class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-800 focus:outline-none"
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

                                <div class="flex justify-between">
                                    <div>
                                        <input
                                            type="checkbox"
                                        />
                                        <label>  Remember me</label>
                                    </div>
                                    <a class="no-underline hover:underline" href="#!"> Forgot Password?</a>
                                </div>

                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 mt-4 bg-red-700 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-800 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                >LOG IN</button>

                            <div class="pt-2 font-bold ">
                                {errors.map((err) => (
                                    <p key={err}>{err}</p>
                                ))}
                            </div>

                            </form>
                        </div>

                        <br></br>
                        <div class="flex">
                            <label>Don't have an account?</label>
                            <Link onClick={handleToSignupPage} class="ml-2 no-underline hover:underline"> Sign up</Link>
                        </div>
                        </div>
                        </div>

                </div>
        </section>
    );
}

export default Login;