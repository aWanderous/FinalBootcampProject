import React from "react";
import "./style.css";

// Input text areas and submit button
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control"{...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button className="btn-sm btn-secondary" {...props} >
      {props.children}
    </button>
  );
}