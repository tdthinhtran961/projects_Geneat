import React from "react";
import Wrapper from "../assets/wrappers/Job";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = (props) => {
  const { _id, position, company, jobLocation, jobType, createdAt, status } =
    props;
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do, YYYY");
  // const date = createdAt;

  const handleEditJob = () => {
    // console.log("edit job");
    dispatch(
      setEditJob({
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      })
    );
  };
  const handleDeleteJob = () => {
    // console.log("delete job");
    dispatch(deleteJob(_id));
  };
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to={"/add-job"}
              className="btn edit-btn"
              onClick={handleEditJob}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={handleDeleteJob}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
