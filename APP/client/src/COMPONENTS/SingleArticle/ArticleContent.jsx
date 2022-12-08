import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

const ArticleContent = (params) => {

    const { article } = params
    const date = new Date()

    return (<>

        <div className="article-content-container container shadow my-5 p-0 pb-4">


            <img src={`http://localhost:5500/public/article/${article.cover_image}`} alt="" className="article-cover-img" />


            <h1 className="article-title mt-5 mb-3 mx-5">{article.title}</h1>


            <div className="article-content mx-5">

                {parse(article.content)}

            </div>

            <div className="author-info mt-5 mx-5">

                <span className="text-danger">Posted By:</span>

                <div className="publish-info d-flex align-items-center mt-4 mb-3">

                    <img src="https://thumbs.dreamstime.com/b/writer-work-handsome-young-sitting-table-writing-something-his-sketchpad-31869272.jpg" alt="" className="publisher-img me-3 shadow-lg" />

                    <div className="publish-info-text d-flex flex-column justify-content-center">

                        <NavLink className="text-primar fw-bold fs-5">{article.publisher_name}</NavLink>
                        <span className="text-secondary">Published On: {date.toDateString(article.publish_date)}</span>

                    </div>

                </div>

            </div>


        </div>

    </>);


}

export default ArticleContent;