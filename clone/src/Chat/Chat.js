import { Avatar, IconButton } from "@material-ui/core";
import {
  InsertEmoticon,
  AttachFile,
  MoreVert,
  SearchOutlined,
  Mic,
} from "@material-ui/icons";
import React, {useState} from "react";
import "./Chat.css";
import sampleData from "../Sidebar/sampleData/data.json";

const Chat = ({ chatData }) => {
  const [input, setInput] = useState("");

  let messages;
  let groupData;
  const sendMessage = (e) => {
    e.preventDefault();
    if (messages) {
      messages.push((<p className='chat_message chat_reciever'>
        <span className="chat__name">'Me'</span>
        {input}
        <span className="chat__timespan">
          {new Date().toLocaleString("he-IL")}
        </span>
      </p>));
    }
  };
  if (Object.keys(chatData).length === 0) {
    return <div className="chat"></div>;
  } else {
    const isGroup = sampleData.filter((g) => g.id === chatData.id);
    if (isGroup.length) {
      groupData = isGroup[0];
      if (groupData.chat) {
        messages = groupData.chat.map((message, index) => {
          let classResult =
            message.from === "Me"
              ? "chat_message chat_reciever"
              : "chat_message";

          classResult += message.typing ? " chat__typing" : "";

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
    return (
      <div className="chat">
        <div className="chat__header">
          <Avatar src={groupData?.picture ?? null} />
          <div className="chat__headerInfo">
            <h3>{groupData?.name ?? "Room name"}</h3>
            {/* <p>{groupData?.lastMessage ?? " Last seen on"} </p> */}
          </div>
          <div className="chat__headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
        <div className="chat__body">{messages}</div>
        <div className="chat__footer">
          <IconButton>
            <InsertEmoticon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <form>
            <input
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
              type="text"
            />
            <button onClick={sendMessage} type="submit">
              Send a message
            </button>
          </form>
          <IconButton>
            <Mic />
          </IconButton>
        </div>
      </div>
    );
  }
};

export default Chat;
