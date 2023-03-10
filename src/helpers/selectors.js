
// getInterview function
export function getInterview(state, interview) {


  if (!interview) {
    return null;
  }

  const newObj = {}

  newObj.interviewer = state.interviewers[interview.interviewer];
  newObj.student = interview.student
  return newObj;

}

// getAppointmentsForDay function
export function getAppointmentsForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);
  
  let result = [];

  if (!state.days.length) {
    return result;
  }

  if (findDay === undefined) {
    return result;
  }

  for (const appointment of findDay.appointments) {
    result.push(state.appointments[appointment])
  }
  return result;
}

// getInterviewersForDay function
export function getInterviewersForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);
  
  let result = [];

  if (!state.days.length) {
    return result;
  }

  if (findDay === undefined) {
    return result;
  }
  for (const id of findDay.interviewers) {

    result.push(state.interviewers[id])
  }
 
  return result;
}