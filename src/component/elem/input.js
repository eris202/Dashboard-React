import React from "react";
import propTypes from "prop-types";

export default function Input({ search , placeholder,...props}) {
  return <input placeholder={placeholder} className={`input ${search ? "search": ""}`} />;
}

Input.propTypes = {
  // variant: propTypes.oneOf(["search", "textfield"]),
};
