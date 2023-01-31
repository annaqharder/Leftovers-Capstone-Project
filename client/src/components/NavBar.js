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
        <>
        <div className="NavBar">
            {!user ? (
                <h3>
                    <span>Leftovers</span>
                </h3>
            ): (
                <h3>
                <span onClick={handleHome}>Leftovers</span>
                </h3>
            )}

            {!user ? (
            <div>
                <NavLink exact to="/" onClick={handleToLoginClick}>Login</NavLink>
            </div>)
            : (
            <div className="NavBarRoutes">
                <div className="displayNavBar">
                    <nav className="display">
                        <NavLink className="displayNavRoute" exact to="/all-restaurants">Restaurants</NavLink>
                        <NavLink className="displayNavRoute" exact to="/all-coffee">Coffee</NavLink>
                        <NavLink className="displayNavRoute" exact to="/all-bars">Bars</NavLink>
                        <NavLink className="displayNavRoute" exact to="/map">Map</NavLink>
                    </nav>
                </div>
                <div className="dropdownNavBar">
                    <div className="dropdown">
                        <img className="NavBarDropdownBtn" src={user.avatar}/>
                        <nav className="dropdown-content">
                            <NavLink className="NavRoute" exact to="/want-to-visit">Want to Visit</NavLink>
                            <NavLink className="NavRoute" exact to="/profile">Profile</NavLink>
                            <NavLink className="NavRoute" exact to="/" onClick={handleLogoutClick}>Logout</NavLink>
                        </nav>
                    </div>
                    <div>
                        <h2>Hello, {user.first_name}!</h2>
                    </div>
                </div>
            </div>
            )}
        </div>
        </>
        )
    }

export default NavBar;