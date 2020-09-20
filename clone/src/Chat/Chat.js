import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreHoriz, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";
import sampleData from "../Sidebar/sampleData/data.json";

const Chat = ({ chatData }) => {
  console.log(chatData);
  let messages;
  let groupData;
  if (chatData) {
    const isGroup = sampleData.filter((g) => g.id === chatData.id);
    if (isGroup.length) {
      groupData = isGroup[0];
      if (groupData.chat) {
        messages = groupData.chat.map((message, index) => {
          let classResult =
            message.from === "Me"
              ? "chat_message chat_reciever"
              : "chat_message";

          classResult += message.typing ? ' chat__typing' : ''

          return (
            <p key={index} className={classResult}>
              <span className="chat__name">{message.from}</span>
              {message.message}
              <span className="chat__timespan">
                {new Date().toLocaleString("he-IL")}
              </span>
            </p>
          );
        });
      }
    }
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={groupData?.picture ?? null} />
        <div className="chat__headerInfo">
          <h3>{groupData?.name ?? "Room name"}</h3>
          <p>{groupData?.lastMessage ?? " Last seen on"} </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages}
      </div>
      <div className="chat__footer"></div>
    </div>
  );
};

export default Chat;
