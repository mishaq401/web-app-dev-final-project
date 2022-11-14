import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogCard from "../Utils/BlogCard";
import Carousel from "../Utils/Carousel";
import CategoryCard from "../Utils/CategoryCard";
import WriterCard from "../Utils/WriterCard";
import Cookies from "js-cookie"

const Home = () => {



    return (<>

        <div className="container-fluid">

            <Carousel />

            <div className="home-top-blogs-container container mt-4 mb-5 shadow pt-1 pb-1">

                <h1 className="m-auto section-heading mb-5 mt-4 pb-1">OUR TOP PICKS</h1>

                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </div>

            {/* 
            <div className="home-top-writers-container container d-flex flex-column align-items-center mt-4 mb-5 shadow pt-1 pb-1">

                <h1 className="m-auto section-heading mb-5 mt-4 pb-1">OUR TOP WRITERS</h1>

                <div className="w-100 d-flex align-items-center justify-content-evenly flex-wrap">

                    <WriterCard />
                    <WriterCard />
                    <WriterCard />

                </div>

                <NavLink className="btn btn-outline-primary fs-5 rounded-pill px-5 pb-2 mb-5 mt-4">View More</NavLink>
            </div>


            <div className="home-top-categories-container container d-flex flex-column align-items-center mt-4 mb-5 shadow pt-1 pb-1">

                <h1 className="m-auto section-heading mb-5 mt-4 pb-1">OUR TOP CATEGORIES</h1>

                <div className="w-100 d-flex align-items-center justify-content-evenly flex-wrap">

                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />

                </div>

                <NavLink className="btn btn-outline-primary fs-5 rounded-pill px-5 pb-2 mb-5 mt-4">View More</NavLink>

            </div>

 */}
        </div>
    </>);
}

export default Home;
