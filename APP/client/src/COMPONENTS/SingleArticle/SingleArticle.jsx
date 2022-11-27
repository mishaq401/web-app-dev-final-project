import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../BACKEND/server";
import ArticleContent from "./ArticleContent";
import CommentsSection from "./CommenstsSection";


const SingleArticle = () => {

    const { ArticleId } = useParams();

    const [article, SetArticle] = useState({});

    document.title = "DailyPost | Title Of The Article"
    useEffect(() => {

        const GetArticle = async () => {

            // const res = await api.post()
        }

        // GetArticle();

    }, [])

    return (<>

        <ArticleContent />

        <CommentsSection />



    </>);

}

export default SingleArticle;