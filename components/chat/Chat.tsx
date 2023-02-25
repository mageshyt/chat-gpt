"use client";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../../firebase";
import { getAllMessage } from "../../lib/firebase.lib";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();

  // const [messages, setMessages] = React.useState<any>([]);
  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const res = await getAllMessage(chatId, session);
  //     setMessages(res);
  //   };
  //   fetchMessages();
  // }, []);

  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages")
  );
  console.log(messages?.docs.map((doc) => doc.data()));
  return (
    <div className="flex-1">
      {messages?.docs.map((doc) => (
        <div key={doc.id}>{doc.data().messages.text}</div>
      ))}
    </div>
  );
};

export default Chat;
