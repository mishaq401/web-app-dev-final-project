const BlogCard = () => {

    return (<>

        <div className="article w-100 d-flex align-items-center justify-content-center flex-wrap mb-5">

            <img src="https://www.bitely.in/img/blog.jpg" alt="" className="blog-img shadow" />

            <div className="blog-left bg-white py-4 px-4 shadow d-flex flex-column align-items-start mt-0">

                <h4 style={{ width: "max-content " }}
                    className=" text-dark border-bottom border-4 border-danger mauto  mb-3 pb-1">
                    Blog Title
                </h4>

                <p className=" fs- mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus qui consequatur velit consectetur architecto quia numquam, nam aut impedit soluta quos temporibus laboriosam. Ipsa.
                </p>

                <small className="mt-3 text-secondary">By Mian Muhammad Ishaq</small>
                <small className="mb-3 text-secondary">Posted , 1 Jan 2022</small>

                <a href="" target="_blank" className="btn btn-danger  px-3">Read More</a>

            </div>

        </div>

    </>);

}

export default BlogCard;