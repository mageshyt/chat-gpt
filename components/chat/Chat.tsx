"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import db from "../../firebase";
import { getAllMessage } from "../../lib/firebase.lib";
import MessageContainer from "../Message/Message";

type Props = {
  chatId: string;
};

const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    query(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),

      orderBy("createdAt", "asc")
    )
  );
  console.log(messages?.docs.map((doc) => doc.data()));
  return (
    <div className="flex-1 overflow-y-auto">
      {messages?.docs.map((doc, idx: number) => (
        <MessageContainer key={idx} messages={doc.data().messages} />
      ))}
    </div>
  );
};

export default Chat;
//  <div className="text-white p-2 bg-[#141414] rounded-md m-3"
//           key={doc.id}
//         >
//           {doc.data().messages.text}
//         </div>
