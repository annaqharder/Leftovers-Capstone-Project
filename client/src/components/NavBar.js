import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = () => {

    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
            setUser(null)
            }
        },[]);
    }

    function handleHome(){
        history.push('/home')
    }

    function handleToLoginClick(){
        history.push("/")
    }

    return (
        <div>
        <div class="bg-stone-100 bg-opacity-70 flex justify-between p-4 pb-8 shadow-md">
            {!user ? (
                <h3>
                    <span class="font-sans font-family:'Raleway' pl-3 font-sans text-6xl weight-bold">LEFTOVERS <span class="text-xl font-medium">|</span><span class="text-sm font-medium"> track & manage your favorite eateries</span></span>
                </h3>
            ): (
                <div>
                    <h3 class="font-sans font-family:'Raleway' pl-3 font-sans text-6xl weight-bold" onClick={handleHome}>LEFTOVERS</h3>
                </div>
            )}

            {!user ? (
            <div class="flex items-center px-8">
                <NavLink class="font-bold no-underline hover:underline" exact to="/" onClick={handleToLoginClick}>LOGIN</NavLink>
            </div>)
            : (
            <div className="NavBarRoutes">
                <div className="displayNavBar">
                    <nav className="display">
                        <NavLink className="displayNavRoute" exact to="/all-restaurants">RESTAURANTS</NavLink>
                        <NavLink className="displayNavRoute" exact to="/all-coffee">CAFES & COFFEE SHOPS</NavLink>
                        <NavLink className="displayNavRoute" exact to="/all-bars">BARS</NavLink>
                        <NavLink className="displayNavRoute" exact to="/map">MAP</NavLink>
                    </nav>
                </div>
                <div className="dropdownNavBar">
                    <div className="dropdown">
                        {/* <img className="NavBarDropdownBtn" src={user.avatar ? user.avatar : NavImg }/> */}
                        {/* <img className="NavBarDropdownBtn" src="./letter-l.png"/> */}
                        <img className="NavBarDropdownBtn" src="../images/profile.png"/>
                        <nav className="dropdown-content">
                            <NavLink className="NavRoute" exact to="/want-to-visit">WANT TO VISIT</NavLink>
                            <NavLink className="NavRoute" exact to="/profile">PROFILE</NavLink>
                            <NavLink className="NavRoute" exact to="/" onClick={handleLogoutClick}>LOGOUT</NavLink>
                        </nav>
                    </div>
                    <div class="flex items-center">
                        <h2>Hi, {user.first_name}!</h2>
                    </div>
                </div>
            </div>
            )}
        </div>
        </div>
        )
    }

export default NavBar;