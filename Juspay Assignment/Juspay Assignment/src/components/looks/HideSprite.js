import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideSprite = ({ character, comp_id }) => {
  const handler = () => {
    const el = document.getElementById(character.active);
    el.style.display = "none";
  };
  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="text-center rounded bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={() => handler()}
      >
        Hide
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideSprite);
