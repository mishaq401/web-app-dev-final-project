import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileLower from "./Lower";
import ProfileUpper from "./Upper";
import { userContext } from "../../CONTEXTS/UserContext";

const Profile = () => {

    const { user } = useContext(userContext);
    const Navigate = useNavigate();

    document.title = `DailyPost | Profile | ${user.name}`

    // If User Is Not Logged In Redirect to Login Page

    useEffect(() => {


        !user
            ? Navigate("/login")
            : console.log("PLEASE LOGIN TO YOUR ACCOUNT");


    }, [user])



    if (user !== null) {

        return (<>

            <ProfileUpper />

            <ProfileLower />

        </>);

    }


}

export default Profile;


