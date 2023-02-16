import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import userImg from "../components/profile.png";
import EditProfileForm from '../components/EditProfileForm';

function Profile() {

    let {user} = useContext(UserContext)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div>
            <div>
                <div class="text-7xl font-bold p-4 pr-12 bg-green bg-opacity-70">
                    <h1 class="font-sans font-family:'Raleway' tracking-tight text-right uppercase text-white">Profile</h1>
                </div>
            </div>

            <div class="flex">
                <div class="md:w-8/12 lg:w-5/12 p-6 pt-16">
                    <div>
                        <img class="rounded-full ml-auto mr-auto" alt="userImg" src={user.avatar ? user.avatar : userImg }/>
                        <h1 class="text-center text-3xl font-bold uppercase py-3">{user.first_name} {user.last_name}</h1>
                        <h2 class="text-center text-xl font-bold">{user.location}</h2>
                        <h4 class="text-center pt-3">{user.bio}</h4>
                    </div>
                    <div class="text-center pt-4 text-xl">
                        <button
                            class="inline-block px-7 py-3 mt-4 bg-green text-white font-bold text-sm leading-snug uppercase rounded shadow-lg hover:bg-emerald-900 hover:shadow-lg focus:bg-green focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green active:shadow-lg transition duration-150 ease-in-out w-full"
                            type="button"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            Edit Profile
                        </button>
                    </div>
                    <div>
                        {isPopupOpen ? (
                            <EditProfileForm
                                onClose={() => setIsPopupOpen(false)}
                            />
                        ) : null}
                    </div>
                </div>

                <div class="container grid grid-cols-3 gap-2 mx-auto pt-2 pr-2">
                    <img class="shadow-2xl" src="./images/cafe6.webp" alt="profileImages" />
                    <img class="shadow-2xl" src="./images/restaurant5.webp" alt="profileImages" />
                    <img class="shadow-2xl"src="./images/cafe7.webp" alt="profileImages" />
                    <img class="shadow-2xl" src="./images/restaurant1.webp" alt="profileImages" />
                    <img class="shadow-2xl" src="./images/bar1.webp" alt="profileImages" />
                    <img class="shadow-2xl" src="./images/restaurant6.webp" alt="profileImages" />
                </div>
            </div>
        </div>
    );
}

export default Profile;
