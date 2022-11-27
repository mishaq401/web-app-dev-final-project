import BlogCard from "../Utils/BlogCard";

const BlogSearch = () => {
    return (<>

        {/* <div className="category-search container shadow py-4 px-4 my-5">

            <h3 className=" section-heading pb-1">Search By Category:</h3>

        </div> */}


        {/* <div className="query-search container shadow py-4 px-4 my-5 d-flex flex-column gap-2">

            <h3 className=" section-heading pb-1">Query Search:</h3>

        </div> */}


        <div className="search-results container shadow py-4 px-4 mb-5">


            <h1 className="m-auto section-heading mb-5 mt-3 pb-1">Search</h1>


            <form className="search-form my-5 d-flex justify-content-center">

                <input type="text" placeholder="Enter Your Search Query." className="px-2 py-2 fs-5 border border-info" />
                <button type="submit" className="btn btn-info d-flex justify-content-center align-items-center p-0 px-3 border border-info"><i className="material-icons text-white fs-">search</i></button>

            </form>


            <h5 className="">Search Results:</h5 >

            <div className="search-results">

                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />

            </div>

            <small className="d-block text-center text-secondary">Search Something To View Results!</small>

        </div>

    </>);
}

export default BlogSearch;