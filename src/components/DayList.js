// Imports part
import React from "react";
import DayListItem from "./DayListItem";

// Daylist function
function DayList(props) {
  const itemList = props.days.map((day) => {
    
    return (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.onChange}
    />
    )
  })

  return (
    <ul> {itemList} </ul>
  )
}
export default DayList;
