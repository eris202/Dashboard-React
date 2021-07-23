import React from "react";
import propTypes from "propTypes";

export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>
}

Button.propTypes = {
    
}