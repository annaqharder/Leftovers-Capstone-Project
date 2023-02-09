import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';
import NavImg from "../components/default-user.png";

function Profile() {

    let {user, setUser} = useContext(UserContext)
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)

    const [profile, setProfile] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: "",
        location: user.location,
        bio: user.bio,
        avatar: user.avatar
    })

    console.log(profile)
    // const [first_name, setFirst_name] = useState(user.first_name)
    // const [last_name, setLast_name] = useState(user.last_name)
    // const [email, setEmail] = useState(user.email)
    // const [bio, setBio] = useState(user.bio)
    // const [password, setPassword] = useState("")
    // const [location, setLocation] = useState(user.location)
    // const [avatar, setAvatar] = useState(user.avatar)

    // console.log(profile)

    function handleEditProfile(e) {

        e.preventDefault();

        // const editProfile = {
        //     first_name: first_name,
        //     last_name: last_name,
        //     email: email,
        //     password: password,
        //     location: location,
        //     bio: bio,
        //     avatar: avatar
        // }

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile)
        })
            .then((r) => r.json())
            .then((editedProfile) => setProfile(editedProfile))

            history.push('/home')
    }

    function handleChange(e) {
        setProfile((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
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

            {showForm ? (
                <form onSubmit={handleEditProfile}>
                    <h1>Edit Your Profile</h1>
                    <div>
                        <label>First Name: </label>
                        <input
                            type="text"
                            name="first_name"
                            value={profile.first_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            name="last_name"
                            value={profile.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Location: </label>
                        <input
                            type="text"
                            name="location"
                            value={profile.location}
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
                            value={profile.bio}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Profile Picture: </label>
                        <input
                            type="text"
                            name="avatar"
                            value={profile.avatar}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>New Password: </label>
                        <input
                            type="new-password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                        />
                    </div>
                        <br></br>
                    <button type="submit">Save Profile</button>
                </form>
            ) : <div>
                    <button onClick={() => setShowForm(true)}> Update Profile</button>
                </div>}

        {showForm ?
            (<button onClick={() => setShowForm(false)}>Cancel</button>)
        : null}

        </div>
    );
}

export default Profile;
