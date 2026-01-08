import React, { useContext, useState } from "react";
import JobCard from "../component/JobCard";
// import { jobOpenings } from '../component/Constants';
import "./Careers.css";
import { JobContext } from "../Context/JobContext";

const Careers = () => {
  const { jobOpenings } = useContext(JobContext);
  const [jobFilter, setJobFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  console.log(jobFilter, locationFilter);
  const filterJob = jobOpenings.filter((job) => {
    // let jobValue=jobFilter?
    return (
      job.job_category.toLowerCase().includes(jobFilter.toLowerCase()) &&
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
  });
  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>Join Our Team!</h1>
        <p>
          We are a fast-growing company always looking for talented individuals
          to help us innovate and grow.
        </p>
      </header>

      <section className="job-listings">
        <h2>Current Openings ({jobOpenings.length})</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by Job"
            value={jobFilter}
            onChange={(e) => setJobFilter(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="job-list">
          {filterJob.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <footer className="careers-footer">
        <p>
          Can't find your fit? [Send us your
          resume](mailto:careers@capgemini.com).
        </p>
      </footer>
    </div>
  );
};

export default Careers;
