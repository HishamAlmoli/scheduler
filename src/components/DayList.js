// Imports
import React from "react";
import DayListItem from "./DayListItem";

// Daylist function
export default function DayList(props) {
  const { days } = props;
  const dayListData = days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{dayListData}</ul>;
}