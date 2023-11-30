import React, { useState } from "react";
import { connect } from "react-redux";
import { setWait } from "../../redux/events/eventActions";
import Paper from "@material-ui/core/Paper";

const Wait = ({ events, compId, set_wait }) => {
  const [wait, setStateWait] = useState(0);
  const changeHandler = (e) => {
    let val = parseInt(e.target.value);
    setStateWait(val);
    let curr = events.wait;
    curr[compId] = val;
    set_wait(curr);
  };
  return (
    <Paper elevation={3}>
      <div className=" text-center rounded bg-red-400 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Wait</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={wait}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div
          id={compId}
          className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        >
          Wait {wait} seconds
        </div>
      </div>
    </Paper>
  );
};

// map state to component
const mapStateToProps = (state) => {
  return {
    events: state.event,
  };
};

// map function to component
const mapDispatchToProps = (dispatch) => {
  return {
    set_wait: (value) => dispatch(setWait(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wait);
