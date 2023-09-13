import React from "react";
import Proptypes from "prop-types";

const FormRow = (props) => {
  const {
    type = "text",
    name,
    value,
    handleChange = () => {},
    labelText,
  } = props;
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name || labelText}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        className="form-input"
        onChange={handleChange}
      />
    </div>
  );
};

FormRow.propTypes = {
  name: Proptypes.string.isRequired,
  type: Proptypes.string,
  labelText: Proptypes.string,
  handleChange: Proptypes.func,
  value: Proptypes.any,
};

export default FormRow;
