import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
const Goto_XY = ({ character, compId }) => {
  const [state, setState] = useState({
    gotoX: 0,
    gotoY: 0,
  });
  const gotoHandler = () => {
    const elx = document.getElementById(`${character.active}-div`);
    elx.style.position = "relative";
    elx.style.left = state.gotoX + "px";
    elx.style.top = state.gotoY + "px";
  };
  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white"> X</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.gotoX}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, gotoX: parseInt(e.target.value) });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Y</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.gotoY}
            onChange={(e) => {
              parseInt(e.target.value) !== 0 &&
                setState({ ...state, gotoY: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={compId}
          className="text-center bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={gotoHandler}
        >
          Go to X : {state.gotoX} Y : {state.gotoY}
        </div>
      </div>
    </Paper>
  );
};
function mapStateToProps(state) {
  return {
    character: state.character,
  };
}
export default connect(mapStateToProps)(Goto_XY);
