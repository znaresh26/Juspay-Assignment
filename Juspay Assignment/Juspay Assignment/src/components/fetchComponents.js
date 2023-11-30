import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/RotateAntiClockwise";
import TurnClockwise from "./motion/RotateClockwise";
import GotoXY from "./motion/GotoXY";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Size from "./looks/Size";
import Show from "./looks/ShowSprite";
import Hide from "./looks/HideSprite";
import Wait from "./control/WaitCtr";
import Repeat from "./control/RepeatCtr";
import HideDialog from "./looks/HideDialog";
import MoveY from "./motion/MoveY";
import BroadcastMessage from "./events/MsgBroadcast";
import Think from "./looks/Think";
import ThinkTimer from "./looks/ThinkTimer";

export const fetchComponent = (key, id) => {
  if (key === "MOVE_Y") return <MoveY id={id} />;
  else if (key === "MOVE") return <Move id={id} />;
  else if (key === "TURN_CLOCKWISE") return <TurnClockwise id={id} />;
  else if (key === "TURN_ANTI_CLOCKWISE") return <TurnAntiClockwise id={id} />;
  else if (key === "GOTO_XY") return <GotoXY id={id} />;
  else if (key === "SAY_MESSAGE") return <SayMessage id={id} />;
  else if (key === "SAY_MESSAGE_WITH_TIMER")
    return <SayMessageWithTimer id={id} />;
  else if (key === "SIZE") return <Size id={id} />;
  else if (key === "SHOW") return <Show id={id} />;
  else if (key === "HIDE") return <Hide id={id} />;
  else if (key === "BROADCAST") return <BroadcastMessage id={id} />;
  else if (key === "WAIT") return <Wait id={id} />;
  else if (key === "REPEAT") return <Repeat id={id} />;
  else if (key === "HIDE_MESSAGE") return <HideDialog id={id} />;
  else if (key === "THINK") return <Think id={id} />;
  else if (key === "THINK_TIMER") return <ThinkTimer id={id} />;
  else return null;
};
