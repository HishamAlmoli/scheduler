// Imports Parts
import React from "react";

// Header function
function Header(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">
        {props.time}
      </h4>
      <hr className="appointment__separator" />
    </header>
  )
}
export default Header;
