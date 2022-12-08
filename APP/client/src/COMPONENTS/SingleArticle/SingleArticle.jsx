import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../BACKEND/server";
import ArticleContent from "./ArticleContent";
import CommentsSection from "./CommenstsSection";


const SingleArticle = () => {

    const { ArticleId } = useParams();

    let [ArticleExist, SetArticleExist] = useState(false);

    const [article, SetArticle] = useState({});

    document.title = `DailyPost | ${article.title}`;

    useEffect(() => {

        const GetArticle = async () => {

            const res = await api.post("/article/single-article", { ArticleId });
            const ArticleRes = res.data.article;

            if (ArticleRes.length === 1) {

                SetArticleExist(true);
                SetArticle(ArticleRes[0]);

                // console.log("exist")

            }

        }

        GetArticle();

    }, [ArticleId])

    return (<>


        {ArticleExist

            ?

            <>
                <ArticleContent article={article} />

                <CommentsSection />
            </>

            :

            <div className="article-content-container container shadow my-5 p-0 py-4 text-center fs-5 fw-bold text-danger">

                Article Not Found..!

            </div>

        }


    </>);

}

export default SingleArticle;