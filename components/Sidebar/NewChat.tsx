"use client";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import db from "../../firebase";
const NewChat = () => {
  const style = {
    container:
      "  disabled:cursor-not-allowed  flex p-3 w-full hover:bg-[#2B2C2F] animate hover:scale-105 text-white space-x-2 border-gray-600  border-[2px] rounded-xl  ",
  };

  const router = useRouter();

  const [isBlocker, setIsBlocker] = React.useState(false);
  const { data: session } = useSession();

  const createChat = async () => {
    setIsBlocker(true);
    if (!session) return null;

    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        timestamp: serverTimestamp(),
        userId: session?.user?.email!,
        messages: [],
      }
    );
    setIsBlocker(false);
    // push to the doc id
    router.push(`/chat/${doc.id}`);
  };
  return (
    <button
      disabled={isBlocker}
      onClick={() => createChat()}
      className={style.container}
    >
      <AiOutlinePlusCircle className="text-2xl mr-3" />
      <h1>New Chat</h1>
    </button>
  );
};

export default NewChat;
