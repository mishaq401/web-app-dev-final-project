import { userContext } from "../../CONTEXTS/UserContext";
import { useContext } from "react";
import BlogCard from "../Utils/BlogCard";
import api from "../../BACKEND/server";


const ProfileLower = () => {

    const { user } = useContext(userContext);


    // Functions To Switch Profile Lower Between Articles And Description

    const showArticles = () => {

        const Articles = document.getElementById("ProfileArticles")
        const About = document.getElementById("ProfileAbout")

        if (About) {

            About.style.display = "none";
            Articles.style.display = "block";
        }

    }

    const showAbout = () => {

        const Articles = document.getElementById("ProfileArticles")
        const About = document.getElementById("ProfileAbout")

        // console.log("show about")
        if (Articles) {

            Articles.style.display = "none";
            About.style.display = "block";
        }
    }

    return (<>

        <div className="profile-lower container my-5 shadow px-5 pb-5">

            <div className="profile-lower-nav d-flex justify-content-center mb-3 p-0 mt-2 mb-5">

                <button onClick={showArticles} className="btn px-5 fs-5 text-align-center" style={{ borderRight: "2px solid rgb(231, 231, 231)" }}>Articles</button>
                <button onClick={showAbout} className="btn px-5 fs-5 text-align-center"> About</button>

            </div>

            <div id="ProfileArticles" className="profile-lower-blogs">

                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </div>

            <div id="ProfileAbout" className="profile-lower-about" style={{ display: "none" }}>

                <p className="fs-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ex in fugit quibusdam at exercitationem accusantium sunt labore, perspiciatis laudantium corrupti quia hic beatae, recusandae aliquid blanditiis architecto quis magnam molestias aut cupiditate? Sunt consectetur, molestiae iste asperiores, quisquam provident labore, distinctio sapiente similique aperiam placeat ipsa debitis fuga voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error dolorum nesciunt, illum voluptas ea eos eius commodi excepturi ipsa quod, magnam velit similique fuga, delectus cum minus eligendi sit!</p>
                <p className="fs-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ex in fugit quibusdam at exercitationem accusantium sunt labore, perspiciatis laudantium corrupti quia hic beatae, recusandae aliquid blanditiis architecto quis magnam molestias aut cupiditate? Sunt consectetur, molestiae iste asperiores, quisquam provident labore, distinctio sapiente similique aperiam placeat ipsa debitis fuga voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error dolorum nesciunt, illum voluptas ea eos eius commodi excepturi ipsa quod, magnam velit similique fuga, delectus cum minus eligendi sit!</p>
                <p className="fs-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ex in fugit quibusdam at exercitationem accusantium sunt labore, perspiciatis laudantium corrupti quia hic beatae, recusandae aliquid blanditiis architecto quis magnam molestias aut cupiditate? Sunt consectetur, molestiae iste asperiores, quisquam provident labore, distinctio sapiente similique aperiam placeat ipsa debitis fuga voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error dolorum nesciunt, illum voluptas ea eos eius commodi excepturi ipsa quod, magnam velit similique fuga, delectus cum minus eligendi sit!</p>
                <p className="fs-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ex in fugit quibusdam at exercitationem accusantium sunt labore, perspiciatis laudantium corrupti quia hic beatae, recusandae aliquid blanditiis architecto quis magnam molestias aut cupiditate? Sunt consectetur, molestiae iste asperiores, quisquam provident labore, distinctio sapiente similique aperiam placeat ipsa debitis fuga voluptates. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error dolorum nesciunt, illum voluptas ea eos eius commodi excepturi ipsa quod, magnam velit similique fuga, delectus cum minus eligendi sit!</p>

            </div>

        </div>


    </>);
}

export default ProfileLower;