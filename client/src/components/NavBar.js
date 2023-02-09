import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { NavLink, useHistory } from "react-router-dom";
import NavImg from "../components/default-user.png"

const NavBar = () => {

    let { user, setUser } = useContext(UserContext);
    let history = useHistory();

    // console.log(user.first_name)

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
                    <span className="appName">LEFTOVERS</span>
                </h3>
            ): (
                <h3>
                <span className="appName" onClick={handleHome}>LEFTOVERS</span>
                </h3>
            )}

            {!user ? (
            <div>
                <NavLink exact to="/" onClick={handleToLoginClick}>LOGIN</NavLink>
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
                        <img className="NavBarDropdownBtn" src={user.avatar ? user.avatar : NavImg }/>
                        <nav className="dropdown-content">
                            <NavLink className="NavRoute" exact to="/want-to-visit">WANT TO VISIT</NavLink>
                            <NavLink className="NavRoute" exact to="/profile">PROFILE</NavLink>
                            <NavLink className="NavRoute" exact to="/" onClick={handleLogoutClick}>LOGOUT</NavLink>
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