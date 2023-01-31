import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import NavImg from "../components/default-user.png"

function Profile({ user }) {

    // let { user } = useContext(UserContext)

    console.log(user)

    const [credentials, setCredentials] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        location: user.location,
        bio: user.bio,
        avatar: user.avatar,
        password: "",
        password_confirmation: ""
    })

    function handleChange(e) {
        setCredentials((prevCredential) => {
            return {
                ...prevCredential,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
            })
            .then((r) => r.json())
            .then((data) => setCredentials(data))
    }

    return (
        <div>
            <div>
                <h1>Profile</h1>
                <div>
                    <img className="profileAvatar" src={user.avatar ? user.avatar : NavImg }/>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <h2>{user.location}</h2>
                    <h4>{user.bio}</h4>
                </div>
            </div>

            <div>
                <h1>Update Profile</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input
                            type="text"
                            name="firstName"
                            value={credentials.first_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            value={credentials.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Location: </label>
                        <input
                            type="text"
                            name="location"
                            value={credentials.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Bio: </label>
                        <textarea
                            rows="4"
                            cols="20"
                            type="text"
                            name="bio"
                            value={credentials.bio}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Profile Picture: </label>
                        <input
                            type="text"
                            name="avatar"
                            value={credentials.avatar}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>New Password: </label>
                        <input
                            type="new-password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Confirm Password: </label>
                        <input
                            type="new-password"
                            name="password_confirmation"
                            value={credentials.password_confirmation}
                            onChange={handleChange}
                        />
                    </div>
                        <br></br>
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;