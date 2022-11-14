import { userContext } from "../../CONTEXTS/UserContext";
import api from "../../BACKEND/server";
import { useContext } from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.js";

import { useState } from "react";

const ProfileUpper = () => {

    const { user, userDispatch } = useContext(userContext);

    const [NewAvatar, SetNewAvatar] = useState("");

    // Function To Update User Avatar in DB

    const updateAvatar = async (e) => {

        e.preventDefault();

        const AvatarFormData = new FormData();
        AvatarFormData.append("filename", user.avatar)
        AvatarFormData.append("avatar", NewAvatar)

        console.log(AvatarFormData)
        try {

            // console.log(AvatarFormData);
            const AvatarUpdateRes = await (await api.post("/user/update-avatar", AvatarFormData));
            console.log(AvatarUpdateRes);

            userDispatch({ ...user, avatar: AvatarUpdateRes.data.NewAvatar });
            console.log(user.avatar)
            document.getElementById("AvatarSuccess").style.display = "block";

            setTimeout(() => {

                window.location.reload();

            }, 1000);

        }

        catch (error) {

            if (error) {
                document.getElementById("AvatarFail").style.display = "block";
            }
        }

    }


    return (<>

        <div className="profile-upper container my-5 d-flex align-items-center justify-content-evenly flex-wrap py-5 shadow">


            <button title="Update Avatar" type="button" className="avatar-btn btn border-none outline-none p-0" data-bs-toggle="modal" data-bs-target="#start-chat-modal">

                <img src={`http://localhost:5500/public/avatars/${user.avatar}`} alt="" className="profile-img mb- shadow" />

                <div className="avatar-icons fs-4  flex-column align-items-center justify-content-center">

                    <i className="material-icons text-warning mx-1 mt-1">add</i>
                    <span className="fw-bol">Update Avatar</span>

                </div>

            </button>

            <div className="profile-upper-right d-flex flex-column align-items-center  ">

                <span className="mb-2 fs-5">Name:<span className="fw-bold"> {user.name}</span></span>
                <span className="d-flex align-items-center mb-2">Rating: <i className="material-icons fs-5 text-warning mx-1 mt-1">star</i> 5.00</span>

            </div>

        </div>


        {/* Modal To Start A Update Avatar */}

        <div className="modal fade" id="start-chat-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Your Avatar</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form onSubmit={updateAvatar} className="d-flex flex-column mb-4">

                            <input type="file" onChange={e => SetNewAvatar(e.target.files[0])} accept="image/*" required />

                            <button type="submit" className="btn btn-outline-primary rounded-pill mt-3 p-0 pb-1 px-3" style={{ width: "max-content" }}>Update</button>

                        </form>

                        <span id="AvatarSuccess" className="text-success" style={{ display: "none" }}>Avatar Changed Successfully!</span>
                        <span id="AvatarFail" className="text-danger" style={{ display: "none" }}>Server Error Please try Again Later!</span>

                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> */}
                </div>
            </div>
        </div>


    </>);
}

export default ProfileUpper;



{/*             
            <form className="my-5" onSubmit={updateAvatar}>

                <input type="file" onChange={e => setAvatar(e.target.files[0])} />
                <button type="submit">Submit</button>

            </form> */}



/*
useEffect(() => {

    const CheckLogin = () => {

        if (user === null) {

            Navigate("/login");
        }
    }

    CheckLogin()

}, [user])
*/
