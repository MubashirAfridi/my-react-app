import React from "react";

const Alert = (props) => {
    const capitlize =(word) => {
 const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && (
      <div className="container mt-4 ">
        <div className={`alert theme-${props.alert.type}`} role="alert">
          <strong> {capitlize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
