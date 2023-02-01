import { useState, useEffect, useContext } from 'react';
// import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';
import NavImg from "../components/default-user.png";
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

function Profile({user}) {
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)

    // if (!user) {
    //     history.push("/home")
    // }

    // const {} = useQuery(["user"], () => {
    //     Axios.get("/me").then((res) => res.data)
    // })

    // const {user} = useContext(UserContext)


    console.log(user)
    const [setProfile] = useState(null)
    const [first_name, setFirst_name] = useState(user.first_name)
    const [last_name, setLast_name] = useState(user.last_name)
    const [email, setEmail] = useState(user.email)
    const [bio, setBio] = useState(user.bio)
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState(user.location)
    const [avatar, setAvatar] = useState(user.avatar)

    function handleEditProfile(e) {

        e.preventDefault();

        const editProfile = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            location: location,
            bio: bio,
            avatar: avatar
        }
        console.log(editProfile)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editProfile)
        })
            .then((r) => r.json())
            .then((editedProfile) => (
                console.log(editedProfile),
                setProfile(editedProfile),
                setFirst_name(editedProfile.first_name),
                setLast_name(editedProfile.last_name),
                setEmail(editedProfile.email),
                setLocation(editedProfile.location),
                setBio(editedProfile.bio),
                setAvatar(editedProfile.avatar),
                setPassword(editedProfile.password)
            ))
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
                            name="firstName"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Location: </label>
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Bio: </label>
                        <textarea
                            rows="4"
                            cols="20"
                            type="text"
                            name="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Profile Picture: </label>
                        <input
                            type="text"
                            name="avatar"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>New Password: </label>
                        <input
                            type="new-password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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