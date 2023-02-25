"use client";
import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import db from "../../firebase";
import ChatRow from "../chatRow/ChatRow";
const Sidebar = () => {
  const style = {
    container: "p-3 h-screen   flex flex-col",
  };

  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("timestamp", "asc")
      )
  );

  return (
    <div className={style.container}>
      <div className="flex-1">
        {/* new chat */}
        <NewChat />
        {/* select chat modal */}
        <div className="mt-3 space-y-3 w-full">
          {/* chatList */}
          {chats?.docs.map((chat, idx) => (
            <ChatRow key={idx} chatId={chat.id} />
          ))}
        </div>
      </div>
      {/* logout */}
      {session && (
        <div className=" center flex-col ">
          <img
            onClick={() => signOut()}
            src={session?.user?.image as string}
            referrerPolicy="no-referrer"
            className="h-12 w-12 rounded-full  mx-auto mb-3  cursor-pointer hover:opacity-50"
          />
          {/* text sign out */}
          <p className="text-gray-500">
            sign out as <span className="font-bold">{session?.user?.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
