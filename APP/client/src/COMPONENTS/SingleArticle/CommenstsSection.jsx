import { useState } from "react";
import CommentCard from "../Utils/CommentCard";

import { useContext } from "react";
import { userContext } from "../../CONTEXTS/UserContext";
import { useParams } from "react-router-dom";
import api from "../../BACKEND/server";



const CommentsSection = () => {

    const { user } = useContext(userContext);
    const { ArticleId } = useParams();
    const date = new Date();

    const [commentsl_list, setCommentsList] = useState([]);
    const [new_comment, setNewComment] = useState({ publiser: user.id, article: Number(ArticleId), comment_text: "" });

    const getNewComment = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setNewComment({ ...new_comment, [name]: value });
    }

    const publishComment = async (e) => {

        e.preventDefault();

        const comment_res = api.post("/article/create-comment", new_comment);
    }

    const getComments = () => { }

    return (<>

        <div className="article-comment-container container shadow-lg my-5 px-4 py-4 d-flex flex-column align-items-start">

            <h3 className="mb-5 fw-bold">Comments:</h3>

            <form onSubmit={publishComment} className="comment-post-form d-flex  align-items-center" >

                <textarea name="comment_text" value={new_comment.comment_text} onChange={getNewComment} type="text" minLength={10} maxLength={250} placeholder="Post A Comment" className="py-2 px-2" />

                <button type="submit" className="btn btn-primary ms-2"><i className="material-icons text-white">send</i></button>

            </form>

            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />

        </div>
    </>);
}

export default CommentsSection;
