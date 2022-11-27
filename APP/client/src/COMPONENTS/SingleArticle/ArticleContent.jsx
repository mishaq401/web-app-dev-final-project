import { NavLink } from "react-router-dom";


const ArticleContent = () => {

    return (<>

        <div className="article-content-container container shadow my-5 p-0 pb-4">


            <img src="https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960" alt="" className="article-cover-img" />


            <h1 className="article-title mt-5 mb-3 mx-5">Title Of The Article</h1>


            <div className="article-content mx-5">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit excepturi odio hic laboriosam molestiae ducimus optio eius nulla commodi dignissimos, tenetur nam aliquam deserunt eveniet earum magni qui cupiditate nostrum necessitatibus ad. Velit voluptatibus necessitatibus earum, doloribus et doloremque debitis? Maiores, sunt fugit quae mollitia in numquam fuga quo adipisci architecto blanditiis corporis necessitatibus impedit, modi tempore hic aperiam. Rem optio dolores fugit, saepe sapiente exercitationem itaque dolor minus aut laudantium officia laboriosam impedit voluptas expedita in iste repellat aliquam quis, temporibus, soluta labore. Saepe dicta odit deleniti minus adipisci? Facilis iste distinctio nam voluptatem aliquam nisi dolores quaerat.            </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit excepturi odio hic laboriosam molestiae ducimus optio eius nulla commodi dignissimos, tenetur nam aliquam deserunt eveniet earum magni qui cupiditate nostrum necessitatibus ad. Velit voluptatibus necessitatibus earum, doloribus et doloremque debitis? Maiores, sunt fugit quae mollitia in numquam fuga quo adipisci architecto blanditiis corporis necessitatibus impedit, modi tempore hic aperiam. Rem optio dolores fugit, saepe sapiente exercitationem itaque dolor minus aut laudantium officia laboriosam impedit voluptas expedita in iste repellat aliquam quis, temporibus, soluta labore. Saepe dicta odit deleniti minus adipisci? Facilis iste distinctio nam voluptatem aliquam nisi dolores quaerat.            </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit excepturi odio hic laboriosam molestiae ducimus optio eius nulla commodi dignissimos, tenetur nam aliquam deserunt eveniet earum magni qui cupiditate nostrum necessitatibus ad. Velit voluptatibus necessitatibus earum, doloribus et doloremque debitis? Maiores, sunt fugit quae mollitia in numquam fuga quo adipisci architecto blanditiis corporis necessitatibus impedit, modi tempore hic aperiam. Rem optio dolores fugit, saepe sapiente exercitationem itaque dolor minus aut laudantium officia laboriosam impedit voluptas expedita in iste repellat aliquam quis, temporibus, soluta labore. Saepe dicta odit deleniti minus adipisci? Facilis iste distinctio nam voluptatem aliquam nisi dolores quaerat.            </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit excepturi odio hic laboriosam molestiae ducimus optio eius nulla commodi dignissimos, tenetur nam aliquam deserunt eveniet earum magni qui cupiditate nostrum necessitatibus ad. Velit voluptatibus necessitatibus earum, doloribus et doloremque debitis? Maiores, sunt fugit quae mollitia in numquam fuga quo adipisci architecto blanditiis corporis necessitatibus impedit, modi tempore hic aperiam. Rem optio dolores fugit, saepe sapiente exercitationem itaque dolor minus aut laudantium officia laboriosam impedit voluptas expedita in iste repellat aliquam quis, temporibus, soluta labore. Saepe dicta odit deleniti minus adipisci? Facilis iste distinctio nam voluptatem aliquam nisi dolores quaerat.            </p>

            </div>

            <div className="author-info mt-5 mx-5">

                <span className="text-danger">Posted By:</span>

                <div className="publish-info d-flex align-items-center mt-4 mb-3">

                    <img src="https://thumbs.dreamstime.com/b/writer-work-handsome-young-sitting-table-writing-something-his-sketchpad-31869272.jpg" alt="" className="publisher-img me-3 shadow-lg" />

                    <div className="publish-info-text d-flex flex-column justify-content-center">

                        <NavLink className="text-primar fw-bold fs-5">Mian Muhammad Ishaq</NavLink>
                        <span className="text-secondary">Published On: 5 January, 2021</span>

                    </div>

                </div>

            </div>


        </div>

    </>);
}

export default ArticleContent;