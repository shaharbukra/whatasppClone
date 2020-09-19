import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
const SidebarChat = (props) => {
  let typing;
  if (props.typing) {
    typing = <div className="sidebarChat__typing">typing...</div>;
  }

  return (
    <div className="sidebarChat">
      <Avatar src={props.picture ?? undefined} />
      <div className="sidebarChat__info">
        <h2>{props.name ?? "Room Name"}</h2>
        <p>{props.lastMessage ?? "Room Name"}</p>
        {typing}
      </div>
    </div>
  );
};

export default SidebarChat;
