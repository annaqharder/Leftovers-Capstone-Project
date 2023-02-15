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
            <h1 class="text-4xl font-bold py-2 mb-4 text-center uppercase">Edit Your Profile</h1>
                <form onSubmit={handleEditProfile}>
                <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">First Name: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="first_name"
                            value={profile.first_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Last Name: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="last_name"
                            value={profile.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Email: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Location: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="location"
                            value={profile.location}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Bio: </label>
                        <textarea
                            class="indent-2 w-5/6 rounded border border-solid border-gray-300"
                            rows="4"
                            cols="20"
                            type="text"
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">Profile Picture: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="text"
                            name="avatar"
                            value={profile.avatar}
                            onChange={handleChange}
                        />
                    </div>

                    <div class="flex py-2">
                        <label class="text-lg font-bold pr-2">New Password: </label>
                        <input
                            class="indent-2 w-4/6 rounded border border-solid border-gray-300"
                            type="new-password"
                            name="password"
                            value={profile.password}
                            onChange={handleChange}
                        />
                    </div>
                        <br></br>

                <div class="flex justify-between">
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-emerald-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                    >
                        Save Profile
                    </button>
                    <button
                        class="inline-block px-7 py-3 mt-4 bg-red-800 text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-red-900 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-half"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>

                </form>

            </div>
        </div>
    );
}

export default EditProfileForm;