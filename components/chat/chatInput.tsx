"use client";

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React from "react";
import { TbSend } from "react-icons/tb";
import db from "../../firebase";
import { AskQuestion } from "../../lib/endpoint.api";
import { Message } from "../../typings";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const style = {
    input: "bg-transparent flex-1 h-full outline-none text-white border-none",
    container: "bg-[#40414F]    p-2   w-full flex items-center   rounded-md ",
    icon: "text-white h-5 w-5",
    button:
      "bg-[#21c59c] hover:bg-opacity-75  disabled:cursor-not-allowed disabled:bg-gray-300  text-white px-4 py-2 rounded-md",
  };

  const [message, setMessage] = React.useState("");

  // todo useSwr to get modal
  const model = "text-davinci-003";
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) return;

    // remove whitespace

    const trimmedMessage = message.trim();

    const messageData: Message = {
      text: trimmedMessage,

      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://avatars.dicebear.com/api/human/${session?.user?.email!}.svg`,
      },
    };
    const toastId = toast.loading("Sending message...");

    const docRef = await setDoc(
      doc(db, "users", session?.user?.email!, "chats", chatId),
      {
        messages: [messageData],
        timestamp: serverTimestamp(),
      }
    );

    // ask gpt
    AskQuestion(message, chatId, model, session)
      .then((res: any) => {
        console.log(res, "response");
        toast.success("message sent", { id: toastId });
      })
      .catch((err) => {
        const { response } = err;
        console.log(response);
        toast.error(response?.data?.answer, { id: toastId });
      });

    setMessage("");
  };
  return (
    <div className={"flex  justify-center mx-4  mb-4"}>
      <form onSubmit={sendMessage} className={style.container}>
        <input
          type="text"
          placeholder="Type a message"
          className={style.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className={style.button}
          disabled={!message || !session}
          type="submit"
        >
          <TbSend className={style.icon} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
