import "../../../node_modules/bootstrap/dist/js/bootstrap"

const Carousel = () => {
    return (<>

        {/* <!-- Designing Carousel --> */}


        <div id="carouselExampleSlidesOnly"
            className="home-carousel carousel slide container borderborder-2 border-primary p-0 my-5 shadow" data-bs-ride="carousel">

            <div className="home-carousel-inner carousel-inner w-100">

                <div className="carousel-item active">
                    <img src="https://www.thebalancemoney.com/thmb/vEwJqdi89pY3yAvmcr6WMBxRBrA=/1732x1155/filters:fill(auto,1)/Stocksy_woman-writing-laptop_476082-57ab432d3df78cf459975331.jpg" className="d-block w-100 home-carousel-image" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src="https://web-static.wrike.com/cdn-cgi/image/width=900,format=auto/blog/content/uploads/2016/10/Content-Marketing.jpg?av=a5a248f961a4275cd4cdadc6114afb2d" className="d-block w-100 home-carousel-image" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src="https://media.audext.com/wp-content/uploads/2020/09/expert-tips-for-writing-job-posts.jpg" className="d-block w-100 home-carousel-image" alt="..." />
                </div>

            </div>

        </div>


    </>);
}

export default Carousel;