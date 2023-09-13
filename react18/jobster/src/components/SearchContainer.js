import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";


const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    // console.log("handleSearch:", e);
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  const customDebounce = () => {
    let timeoutID;
    return (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setLocalSearch(value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name, value }));
      }, 1000);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit:", e);
    setLocalSearch("");
    dispatch(clearFilters());
  };
  const optimizedDebounce = useMemo(() => customDebounce(), []);
  return (
    <Wrapper>
      <form action="" className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          ></FormRow>
          <FormRowSelect
            labelText={"status"}
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          ></FormRowSelect>
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          ></FormRowSelect>
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          ></FormRowSelect>
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
