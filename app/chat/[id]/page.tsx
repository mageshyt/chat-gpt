"use client";
import { useSession } from "next-auth/react";
import Chat from "../../../components/chat/Chat";

import ChatInput from "../../../components/chat/chatInput";

type props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: props) => {
  const { data: session } = useSession();

  return (
    <div>
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
