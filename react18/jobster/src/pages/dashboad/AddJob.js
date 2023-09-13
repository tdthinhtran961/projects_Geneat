import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "../../components/FormRowSelect";
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from "../../features/job/jobSlice";

const AddJob = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleClearValue = () => {
    dispatch(clearValues());
  };
  return (
    <Wrapper>
      <form action="" className="form">
        <h3>add job</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            name="position"
            value={position}
            handleChange={handleJobInput}
          ></FormRow>
          {/* company */}
          <FormRow
            name="company"
            value={company}
            handleChange={handleJobInput}
          ></FormRow>
          {/* location */}
          <FormRow
            name="jobLocation"
            labelText={"job location"}
            value={jobLocation}
            handleChange={handleJobInput}
          ></FormRow>
          {/* job status */}
          <FormRowSelect
            name={"status"}
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          ></FormRowSelect>
          {/* job type */}
          <FormRowSelect
            name={"jobType"}
            labelText={"job type"}
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          ></FormRowSelect>
          {/* btn container */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={handleClearValue}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
