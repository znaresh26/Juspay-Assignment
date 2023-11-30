import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
const MoveY = ({ character, compId }) => {
  const [steps, setSteps] = useState(0);
  const handler = () => {
    const element = document.getElementById(`${character.active}-div`);
    const top = element.offsetTop;
    element.style.position = "relative";
    element.style.top = top + steps + "px";
  };
  return (
    <Paper elevation={3}>
      <div
        id={compId}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer `}
        onClick={handler}
      >
        Move Y{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />{" "}
        steps
      </div>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};
export default connect(mapStateToProps)(MoveY);
