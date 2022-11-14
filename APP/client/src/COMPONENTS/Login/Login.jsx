import { useContext } from "react";
import { useState } from "react";
import { json, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import api from "../../BACKEND/server"
import { LoginAction, userContext } from "../../CONTEXTS/UserContext";

const Login = () => {

    document.title = "DailyPost | Login"

    const [login, setLogin] = useState({ username_email: "", password: "" })
    const [error, getError] = useState("Internal Server Error")

    const navigate = useNavigate();

    const { user, userDispatch } = useContext(userContext);

    const getLogin = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setLogin({ ...login, [name]: value });
    }


    const LoginFunc = async (event) => {

        event.preventDefault();

        try {

            const LoginRes = await api.post("/user/login-user", login);

            userDispatch(LoginAction(LoginRes.data));

            Cookies.set('user', JSON.stringify(LoginRes.data), { expires: 2 });
            //  Cookies.set('user', LoginRes.data);

            navigate("/");

            // console.log(LoginRes.data);
            // console.log(user);

        }


        catch (err) {

            if (err.response.data) {
                const { status, data } = err.response;

                getError(data.message);

                if (status === 401) {

                    document.getElementById("warningalert").style.display = "flex";

                    setTimeout(() => {

                        document.getElementById("warningalert").style.display = "none";

                    }, 4000);
                }

                else {

                    document.getElementById("failalert").style.display = "flex";

                    setTimeout(() => {

                        document.getElementById("failalert").style.display = "none";

                    }, 4000);

                }
            }

            else {

                document.getElementById("failalert").style.display = "flex";

                setTimeout(() => {

                    document.getElementById("failalert").style.display = "none";

                }, 4000);

            }

        }

    }

    return (
        <>

            <div id="failalert" className="alert alert-danger py-1  align-items-center m-0" role="alert" style={{ borderRadius: "0px", display: "none" }}>
                <i className="material-icons text-danger fs-5 me-2" style={{ width: "max-content" }}>error</i>Error: {error}
            </div>

            <div id="warningalert" className="alert alert-warning py-1  align-items-center m-0" role="alert" style={{ borderRadius: "0px", display: "none" }}>
                <i className="material-icons text-warning fs-5 me-2" style={{ width: "max-content" }}>warning</i>Warning: {error}
            </div>

            <div className="login-reg-container d-flex  justify-content-center align-items-center flex-column">


                <form onSubmit={LoginFunc} className="login-reg-form d-flex flex-column align-items-center shadow-lg pb-4" >

                    <h2 className="bg-primar text-white w-100 text-center pt-3 pb-4 mb-5">Sign Into Your Account</h2>

                    <div className="login-reg-input-container d-flex align-items-center mt-3 mb-5">

                        <i className="material-icons me-3 text-info fs-">person</i>
                        <input name="username_email" className="fs-5 pb-1 pe-2 pt-1 pb-1" type="text" placeholder="Enter Your Username Or Email" value={login.username_email} onChange={getLogin} required />

                    </div>

                    <div className="login-reg-input-container d-flex align-items-center mb-5">

                        <i className="material-icons me-3 text-info fs-">lock</i>
                        <input name="password" className="fs-5 pb-1 pe-2 pt-1 pb-1" type="password" placeholder="Enter Your Password" value={login.password} onChange={getLogin} required />

                    </div>

                    <button className=" fs-5 btn btn-danger rounded-pill pt-0 px-5" type="submit">Login</button>

                    {/* <a className="mt-4 mb-2" href="#" target="/blank">Dont Have An Account Signup</a> */}

                    <NavLink className="mt-4 mb-2" to="/register">Don't Have An Account, Signup.</NavLink>

                </form>

            </div>


        </>
    );
}

export default Login;