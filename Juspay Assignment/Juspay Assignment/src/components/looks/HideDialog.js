import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideDialog = ({ character, comp_id }) => {
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        onClick={() => displayMessage()}
        className="rounded bg-purple-700 text-center text-white max-w-content p-1 my-3"
      >
        Hide Message
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideDialog);
