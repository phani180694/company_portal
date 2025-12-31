import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-details">
        <h3>{job.job_category}</h3>
        <p className="job-meta">
          <strong>Location:</strong> {job.location} | 
          <strong> Employment Type:</strong> {job.employment_type}
        </p>
        <p>{job.description}</p>
      </div>
      <div className="job-actions">
        <Link to={`/careers/${job.id}`} className="apply-button">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;



