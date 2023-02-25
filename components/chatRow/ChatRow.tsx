import Link from "next/link";
import React from "react";
import { BsChatLeft } from "react-icons/bs";
import { BiTrashAlt } from "react-icons/bi";
type props = {
  chatId: string;
};

const ChatRow = ({ chatId }: props) => {
  const style = {
    icon: "h-5 w-5 font-bold      text-white",
    container: "flex justify-between chatbox",

    chat_name: "flex-1 truncate hidden md:inline-flex",
  };
  return (
    <Link className={style.container} href={`/chat/${chatId}`}>
      <BsChatLeft className={style.icon} />

      {/* chat name */}
      <span className={style.chat_name}>{chatId}</span>
      {/* delete btn */}

      <BiTrashAlt className={style.icon + "   hover:text-red-400"} />
    </Link>
  );
};

export default ChatRow;
