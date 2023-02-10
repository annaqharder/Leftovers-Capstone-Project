import React, {useState, useContext} from 'react'
import { UserContext } from '../context/UserProvider'


function EditProfileForm({onClose}) {
    const [error, setError] = useState("");
    let {user, setUser} = useContext(UserContext)

    const [profile, setProfile] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: "",
        location: user.location,
        bio: user.bio,
        avatar: user.avatar,
        // placeId: user.placeId
    })

    function handleEditProfile(e) {

        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile)
        })
        //    .then((r) => console.log(r))
            .then(() => {setUser(profile)})

            onClose()
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
        <div className='back-drop'>
            <div className="dialog">
            <h1>Edit Your Profile</h1>
                <form onSubmit={handleEditProfile}>
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

                <div className='dialog-buttons'>
                    <button className="secondary-button" onClick={onClose}>Cancel</button>
                    <button>Save Profile</button>
                </div>

                </form>

            </div>
        </div>
    );
}

export default EditProfileForm;