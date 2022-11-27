import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/js/bootstrap"
import { LogoutAction, userContext } from "../../CONTEXTS/UserContext";
import Cookies from "js-cookie";


const Navbar = () => {

    const { user, userDispatch } = useContext(userContext);

    const Navigate = useNavigate();

    const Logout = () => {

        Cookies.remove("user")
        userDispatch(LogoutAction);

        Navigate("/");

        window.location.reload(true);
    }

    return (<>

        <nav className="navbar navbar-expand-lg navbar-dark p-0 sticky-top px-3 bg-primary">

            <div className="container-fluid p-0">

                <NavLink className="navbar-brand text-white fs-2 fw-bold" to="/" target="_blank">DailyPost</NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">

                    <ul className="navbar-nav justify-content-evenly fs-5 fw-bold" style={{ width: "60 %" }}>

                        <li className="nav-item ">
                            <NavLink className="nav-link p-0 text-white px-4 pt-3 pb-3" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item ">
                            <NavLink className="nav-link p-0 text-white px-4 pt-3 pb-3" to="/search">Search</NavLink>
                        </li>


                        {!user ?
                            <li className="nav-item ">
                                <NavLink className="nav-link p-0 text-white px-4 pt-3 pb-3" to="/login">Login</NavLink>
                            </li>

                            :
                            <>

                                <li className="nav-item ">
                                    <NavLink className="nav-link p-0 text-white px-4 pt-3 pb-3" to={`/profile`}>Profile</NavLink>
                                </li>

                                <li className="nav-item ">
                                    <button className="btn nav-link p-0 text-white px-4 pt-3 pb-3" onClick={Logout}>Logout</button>
                                </li>
                            </>

                        }


                        <li className="nav-item ">
                            <NavLink className="nav-link p-0 text-white px-4 pt-3 pb-3" to="/contact">Contact</NavLink>
                        </li>


                    </ul>

                </div>

            </div>

        </nav>

    </>);
}

export default Navbar;