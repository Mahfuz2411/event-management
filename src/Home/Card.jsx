import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
  return (
    <>
      <div className="container mx-auto card w-full bg-base-100 shadow-xl overflow-hidden">
        <figure className="w-full">
          <img
            src={service.img}
            alt="Please Wait..."
            className="rounded-t-xl w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.type}</h2>
          <p>{service.description.slice(0, 120)}...</p>
          <div className="card-actions">
            <Link to={`/details/${service.id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  service: PropTypes.object,
};

export default Card;
