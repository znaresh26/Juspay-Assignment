import React from "react";
import { connect } from "react-redux";
import { addList } from "../redux/midarea/actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { yellow } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      margin: 1,
    },
  })
);
const RunButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    fontSize: "13px",
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const MidArea = ({ area_list, add_list, event_values }) => {
  const classes = useStyles();
  const eventFire = (el, etype) => {
    if (el && el.fireEvent) {
      el.fireEvent("on" + etype);
    } else if (el) {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };

  const handleClick = (arr, id) => {
    if (arr.length === 0) return;
    let i = 0;

    let repeat = 1;

    let str1 = `comp${arr[i]}-${id}-${i}`;

    if (arr[i] === "WAIT") {
      let str2 = `comp${arr[i]}-${id}-${i}`;
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();

      while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
        curr_time = new Date().getTime();
      }
    } else if (arr[i] !== "REPEAT") {
      eventFire(document.getElementById(str1), "click");
    } else {
      repeat = event_values.repeat[str1] + 1;
    }
    i++;

    var cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
      }

      if (arr[i] === "WAIT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        let last_time = new Date().getTime();
        let curr_time = new Date().getTime();

        while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
          curr_time = new Date().getTime();
        }
        i++;
      }
      //At current index Handle Repeat Component
      else if (arr[i] === "REPEAT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        repeat = repeat * (event_values.repeat[str2] + 1);
        i++;
      }
      // previous index reapeat component
      else if (arr[i - 1] === "REPEAT" && repeat > 2) {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        repeat--;
      } else {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        i++;
      }
    }, 2000);
  };
  return (
    <div className="flex w-full flex-col justify-center  - Tailwind CSS items-center h-full overflow-auto p-2">
      <div className="flex justify-between ">
        <div className="font-bold mb-10 text-center border border-2 rounded text-white bg-pink-400 p-2 w-auto">
          Main section
        </div>
      </div>
      <div className="grid  h-2/5 grid-flow-col">
        {area_list.midAreaLists.map((l) => {
          return (
            <div className="w-70 h-60 " key={l.id}>
              <Paper elevation={3} className="p-4 h-60 w-full  rounded">
                <div className="w-52 p-2">
                  <Droppable droppableId={l.id} type="COMPONENTS">
                    {(provided) => {
                      return (
                        <ul
                          className={`${l.id} w-48 h-full`}
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                       

                          {l.comps &&
                            l.comps.map((x, i) => {
                              let str = `${x}`;
                              let component_id = `comp${str}-${l.id}-${i}`;

                              return (
                                <Draggable
                                  key={`${str}-${l.id}-${i}`}
                                  draggableId={`${str}-${l.id}-${i}`}
                                  index={i}
                                >
                                  {(provided) => (
                                    <li
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {fetchComponent(str, component_id)}
                                      {provided.placeholder}
                                    </li>
                                  )}
                                </Draggable>
                              );
                            })}
                          {provided.placeholder}
                        </ul>
                      );
                    }}
                  </Droppable>
                </div>
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    area_list: state.list,
    event_values: state.event,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_list: () => dispatch(addList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MidArea);
