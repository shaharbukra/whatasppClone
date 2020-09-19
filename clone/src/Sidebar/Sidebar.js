import React from "react";
import "./Sidebar.css";
// import Icons from '@material-ui/core'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars0.githubusercontent.com/u/3829015?s=460&u=f1a4b4b7a9787991b85d2778f559f937da1630a0&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input type="text" placeholder='Search or start new chat'/>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
