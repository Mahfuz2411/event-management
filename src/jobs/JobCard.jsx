import PropTypes from "prop-types";

const JobCard = ({ job }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{job.title}</h2>
        <p>{job.department}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>{job.description}</p>
        <p>{job.requirements}</p>
        <div>
          <p>{job.posted_date}</p>
          <p>{job.application_deadline}</p>
        </div>
      </div>
    </div>
  );
};

JobCard.propType = {
  job: PropTypes.object,
};

export default JobCard;
