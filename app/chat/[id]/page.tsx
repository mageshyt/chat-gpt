"use client";
import { collection, doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import db from "../../../firebase";

type props = {
  chatId: string;
};

const ChatPage = ({ chatId }: props) => {
  console.log(chatId);
  const { data: session } = useSession();

  useEffect(() => {
    // fetch the chat data
    // fetch the chat messages
    const fetchChat = async () => {
      const chatRef = doc(
        db,
        "users",
        session?.user?.email!,
        "chats",
        "M7HgKTcCuR54ApM7vFZF"
      );

      const chatSnap = await getDoc(chatRef);
      console.log(chatSnap.data());
    };

    fetchChat();
  }, []);
  return <div>page</div>;
};

export default ChatPage;
