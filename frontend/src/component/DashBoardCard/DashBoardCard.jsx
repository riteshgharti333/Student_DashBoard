import "./dashBoardCard.scss";
import { Link } from "react-router-dom";

const DashBoardCard = () => {
  return (
    <div className="dashBoardCard">
      <img
        src="https://codefeast.in/static/media/dsacoursegif.b00f035ef82a5b1da3d8.gif"
        alt=""
        className="course-card__image"
      />
      <div className="course-card__content">
        <div className="course-card__title">Interview Cracker</div>
        <div className="course-card__buttons">
          <Link
            to="/"
            className="course-card__button"
            style={{ textDecoration: "none" }}
          >
            Explore
          </Link>
          <Link
            to="/"
            className="course-card__button"
            style={{ textDecoration: "none" }}
          >
            Learn{" "}
          </Link>
        </div>
        {/* <Link to="/" className="course-card__button"  style={{textDecoration: "none"}}>
          Buy Now 
        </Link> */}
      </div>
    </div>
  );
};

export default DashBoardCard;
