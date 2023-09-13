import React from "react";
import { v4 as uuidv4 } from "uuid";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor="status" className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.length > 0 &&
          list.map((itemValue, index) => {
            return (
              <option value={itemValue} key={uuidv4()}>
                {itemValue}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default FormRowSelect;
