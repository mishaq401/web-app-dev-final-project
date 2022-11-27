import CommentCard from "../Utils/CommentCard";

const CommentsSection = () => {
    return (<>

        <div className="article-comment-container container shadow-lg my-5 px-4 py-4 d-flex flex-column align-items-start">

            <h3 className="mb-5 fw-bold">Comments:</h3>

            <form className="comment-post-form d-flex  align-items-center" >

                <textarea type="text" minLength={10} maxLength={250} placeholder="Post A Comment" className="py-2 px-2" />

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