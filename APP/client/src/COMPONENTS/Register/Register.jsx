import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import api from "../../BACKEND/server";


const Register = () => {

    document.title = "DailyPost | Register"

    const navigator = useNavigate();

    const [registeration, setRegisteration] = useState({ name: "", email: "", password: "" })
    const [error, getError] = useState("")

    const getRegisteration = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setRegisteration({ ...registeration, [name]: value });
    }

    const RegisterFunc = async (event) => {

        event.preventDefault();

        try {

            await api.post('/user/create-user', registeration);
            document.getElementById("successalert").style.display = "flex";

            setTimeout(() => {

                navigator('/login')

            }, 2000);

        }

        catch (err) {

            if (err) {

                // console.log(err.response.data.message);

                const { status, data } = err.response;

                getError(data.message);


                if (status === 401) {

                    document.getElementById("warningalert").style.display = "flex";

                    setTimeout(() => {

                        document.getElementById("warningalert").style.display = "none";

                    }, 4000);

                }

                else {
                    document.getElementById("failalert").style.display = "flex"
                }
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

            <div id="successalert" className="alert alert-success py-1 m-0  align-items-center" role="alert" style={{ borderRadius: "0px", display: "none" }}>
                <i className="material-icons text-success me-2">done</i> Success : Account Created SuccessFully You Are Being Re-Directed To Login Page.
            </div>

            <div className="login-reg-container d-flex  justify-content-center align-items-center flex-column">


                <form onSubmit={RegisterFunc} className="login-reg-form d-flex flex-column align-items-center shadow pb-4" >

                    <h2 className="bg-primar text-white w-100 text-center pt-3 pb-4 mb-5">Sign Into Your Account</h2>

                    <div className="login-reg-input-container d-flex align-items-center mb-5">

                        <i className="material-icons me-3 text-info fs-">person</i>
                        <input name="name" className="fs-5 pb-1 pe-2 pt-1 pb-1" type="text" placeholder="Enter Your Name" value={registeration.name} onChange={getRegisteration} required />

                    </div>

                    <div className="login-reg-input-container d-flex align-items-center mb-5">

                        <i className="material-icons me-3 text-info fs-">mail</i>
                        <input name="email" className="fs-5 pb-1 pe-2 pt-1 pb-1" type="email" placeholder="Enter Your Email" value={registeration.email} onChange={getRegisteration} required />

                    </div>

                    <div className="login-reg-input-container d-flex align-items-center mb-5">

                        <i className="material-icons me-3 text-info fs-">lock</i>
                        <input name="password" className="fs-5 pb-1 pe-2  pt-1 pb-1" type="password" placeholder="Enter Your Password" value={registeration.password} onChange={getRegisteration} required />

                    </div>

                    <button className="mt- fs-5 btn btn-danger rounded-pill pt-0 px-5" type="submit">Signup</button>

                    {/* <a className="mt-4 mb-2" href="#" target="/blank">Dont Have An Account Signup</a> */}
                    <NavLink className="mt-4 mb-2" to="/login">Already Have An Account, Signin.</NavLink>

                </form>

            </div>


        </>
    )
}


export default Register;