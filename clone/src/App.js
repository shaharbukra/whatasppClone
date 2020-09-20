import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [chatData, setChatData] = useState({});
  function handleChatClick(sideBarData) {
    if (sideBarData?.id) {
      setChatData(sideBarData);
    }
  }

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar onSideBarClicked={handleChatClick} />
        <Chat chatData={chatData} />
      </div>
    </div>
  );
}

export default App;
