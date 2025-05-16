"use client";

import { ChatProvider } from "@/context/ChatContext";
import ChatWidget from "./ChatWidget";
import ChatToggle from "./ChatToggle";

const Chat = () => {
  return (
    <ChatProvider>
      <ChatToggle />
      <ChatWidget />
    </ChatProvider>
  );
};

export default Chat;
