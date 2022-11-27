const CommentCard = () => {
    return (<>

        <div className="comment-card d-flex my-4 align-items-cente flex-wrap px-4 py-5 shado">

            <img src="https://thumbs.dreamstime.com/b/writer-work-handsome-young-sitting-table-writing-something-his-sketchpad-31869272.jpg" alt="" className="comment-publisher-img me-3 mb-4" />

            <div className="comment-right d-flex flex-column align-items-start justify-content-center">

                <span className="fs-5 fw-bold">Muhammad Ishaq</span>
                <em className="text-secondary mb-3 " style={{ fontSize: "14px" }}> Posted on: 1 January, 2021</em>
                <span className="comment-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, temporibus. Ea omnis dolore, earum dicta fugit sunt minus aspernatur velit a! Autem officia dolores modi omnis itaque eius, eaque vero.</span>

            </div>

        </div>

    </>);
}

export default CommentCard;