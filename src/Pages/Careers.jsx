import React, { useContext } from 'react';
import JobCard from '../component/JobCard';
// import { jobOpenings } from '../component/Constants';
import './Careers.css'; 
import { JobContext } from '../Context/JobContext';

const Careers = () => {
  const {jobOpenings}=useContext(JobContext)

  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>Join Our Team!</h1>
        <p>We are a fast-growing company always looking for talented individuals to help us innovate and grow.</p>
      </header>

      <section className="job-listings">
        <h2>Current Openings ({jobOpenings.length})</h2>
        <div className="job-list">
          {jobOpenings.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <footer className="careers-footer">
        <p>Can't find your fit? [Send us your resume](mailto:careers@capgemini.com).</p>
      </footer>
    </div>
  );
};

export default Careers;
