import React from "react";
import "./form-input.styles.scss";
interface Props {
  handleChange: any;
  value: any;
  name: string;
  type: string;
  label?: string;
}
export const FormInput = ({ handleChange, label, ...otherProps }: Props) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
