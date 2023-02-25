import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const NewChat = () => {
  const style = {
    container:
      "bg-[#2B2C2F] p-3 rounded-md flex items-center animate hover:scale-105 hover:bg-[#0d0d0e]  cursor-pointer space-x-2 border bg-opacity-25 text-white",
  };
  return (
    <div className={style.container}>
      <AiOutlinePlusCircle className="text-2xl mr-3" />
      <h1>New Chat</h1>
    </div>
  );
};

export default NewChat;
