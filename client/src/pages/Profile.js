import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import NavImg from "../components/default-user.png";
import EditProfileForm from '../components/EditProfileForm';

function Profile() {

    let {user} = useContext(UserContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

            <button
                type="button"
                className="secondary-button"
                onClick={() => setIsPopupOpen(true)}
            >
                Edit Profile
            </button>

            <div>
                {isPopupOpen ? (
                    <EditProfileForm
                        onClose={() => setIsPopupOpen(false)}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default Profile;
