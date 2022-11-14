import { NavLink } from "react-router-dom";

const WriterCard = () => {
    return (<>

        <div className="writer-card d-flex flex-column justify-content-center align-items-center mb-5 mx-4 shadow">

            <img src="https://thumbs.dreamstime.com/b/writer-work-handsome-young-sitting-table-writing-something-his-sketchpad-31869272.jpg" alt="" className="writer-img mb-4" />
            <span className="writer-name fs-5">John Doe</span>

            <div className="d-flex align-items-center mb-1">
                <i className="material-icons text-warning fs-5">star</i>
                <span>3.5</span>
            </div>

            <NavLink to="/" target="_blank" className="btn btn-warning p-0 px-3 pb-1 t-1 mt-2">View</NavLink>

        </div>

    </>);
}

export default WriterCard;