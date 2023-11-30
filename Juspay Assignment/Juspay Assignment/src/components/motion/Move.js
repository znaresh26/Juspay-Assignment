import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
const Move = ({ character, compId }) => {
  const [moveSteps, setMoveSets] = useState(0);
  const clickHandler = () => {
    const el = document.getElementById(`${character.active}-div`);
    const left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + moveSteps + "px";
  };
  return (
    <Paper elevation={3}>
      <div
        id={compId}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer `}
        onClick={clickHandler}
      >
        Move X{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={moveSteps}
          onChange={(e) => setMoveSets(parseInt(e.target.value))}
        />{" "}
        Steps
      </div>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};
export default connect(mapStateToProps)(Move);
