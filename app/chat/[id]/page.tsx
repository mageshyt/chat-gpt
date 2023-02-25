"use client";
import { useSession } from "next-auth/react";
import Chat from "../../../components/chat/Chat";

import ChatInput from "../../../components/chat/chatInput";
import ClientProvider from "../../../components/Provider/ClientProvider";

type props = {
  params: {
    id: string;
  };
};

const ChatPage = ({ params: { id } }: props) => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ClientProvider />

      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
