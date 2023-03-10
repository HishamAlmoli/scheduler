// Imports Parts
import React from "react";
import "components/InterviewerListItem.scss";
import classnames from "classnames";

// InterviewerListItem function
function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })
  return (
    <li onClick={props.setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  )
}
export default InterviewerListItem;
