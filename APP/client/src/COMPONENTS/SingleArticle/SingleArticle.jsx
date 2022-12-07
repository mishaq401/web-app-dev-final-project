import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../BACKEND/server";
import ArticleContent from "./ArticleContent";
import CommentsSection from "./CommenstsSection";


const SingleArticle = () => {

    const { ArticleId } = useParams();

    let [ArticleExist, SetArticleExist] = useState(false);

    const [article, SetArticle] = useState({});

    document.title = "DailyPost | Title Of The Article";

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


        {ArticleExist ?
            <>
                <ArticleContent article={article} />

                <CommentsSection />
            </>
            :
            <span>Hello</span>
        }


    </>);

}

export default SingleArticle;