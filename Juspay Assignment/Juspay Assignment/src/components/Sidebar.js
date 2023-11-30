import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { fetchComponent } from "./fetchComponents";

const Sidebar = () => {
  const motionComponents = [
    "MOVE",
    "MOVE_Y",
    "TURN_CLOCKWISE",
    "TURN_ANTI_CLOCKWISE",
    "GOTO_XY",
  ];
  const looksComponents = [
    "SAY_MESSAGE",
    "SAY_MESSAGE_WITH_TIMER",
    "THINK",
    "THINK_TIMER",
    "HIDE_MESSAGE",
    "SIZE",
    "SHOW",
    "HIDE",
  ];

  const eventsComponents = ["BROADCAST"];

  const controlComponents = ["WAIT", "REPEAT"];
  return (
    <div className="sidebar  flex-col w-full text-white text-center p-4 overflow-auto">
      <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-pink-400 p-2 w-auto">
        Menu bar
      </div>
      <div className="font-bold">{"Motion component"}</div>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion flex flex-col gap-0.5 items-center  my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-80 pt-2"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="font-bold">{"Looks component"}</div>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks flex flex-col gap-0.5 items-center my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-80 pt-2"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="font-bold">{"Events component"}</div>
      <Droppable droppableId="sideArea-events" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-events flex flex-col gap-0.5 items-center  my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {eventsComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-80 pt-2"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="font-bold">{"Control component"}</div>
      <Droppable droppableId="sideArea-control" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-control flex flex-col gap-0.5 items-center  my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {controlComponents.map((Component, i) => (
              <Draggable
                key={`${Component}-sideArea`}
                draggableId={`${Component}-sideArea`}
                index={i}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-80 pt-2"
                  >
                    {fetchComponent(Component)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
export default Sidebar;
