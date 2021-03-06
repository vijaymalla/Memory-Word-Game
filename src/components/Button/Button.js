import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <div className={classes.Button}>
      <button onClick={props.click} disabled={props.disabled}>
        {props.name}
      </button>
    </div>
  );
};
export default button;
