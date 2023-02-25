import React from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const style = {
    input: "bg-transparent outline-none border-none",
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type a message"
          className={style.input}
        />
      </form>
    </div>
  );
};

export default ChatInput;
