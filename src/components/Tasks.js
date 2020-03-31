import React from "react";
import { connect } from "react-redux";

const Tasks = ({ tasks, filter }) => {
  return <ul> {listItems(filteredTasks(tasks, filter))} </ul>;
};

// Filter the incoming tasks with data from the state
const filteredTasks = (incomingTasks, incomingFilter) =>
  incomingTasks.filter(
    task =>
      incomingFilter === "SHOW_ALL" ||
      (incomingFilter === "SHOW_TODO" && !task.done) ||
      (incomingFilter === "SHOW_DONE" && task.done)
  );

// Map through the filtered task array and show items
const listItems = tasks =>
  tasks.map(task => <li key={task.id}>{task.title}</li>);

  // Mapping store state to Task component
const mapStateToProps = state => ({
  tasks: state.tasks,
  filter: state.filter
});

export default connect(mapStateToProps)(Tasks);
