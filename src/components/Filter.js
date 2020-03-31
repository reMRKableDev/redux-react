import React from "react";
import { connect } from "react-redux";

const Filter = ({ filter, dispatch }) => (
  <select
    value={filter}
    onChange={e => dispatch({ type: "CHANGE_FILTER", filter: e.target.value })}
  >
    <option value="SHOW_ALL">Show All</option>
    <option value="SHOW_TODO">Show Todo</option>
    <option value="SHOW_DONE">Show Done</option>
  </select>
);

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(Filter);
