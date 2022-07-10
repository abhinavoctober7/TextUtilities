import React from "react";

export default function Alert(props) {
const capitalize = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
  return (
    <div style={{height:'50px'}}>
    {props.alert && (
      <div>
        <div className={`alert alert-${props.alert.type} show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )}
    </div>
  );
}
