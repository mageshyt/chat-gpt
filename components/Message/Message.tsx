import React from "react";

type Props = {
  messages: {
    text: string;
    user: {
      name: string;
      avatar: string;
    };
  };
};

const MessageContainer = ({ messages }: Props) => {
  const style = {
    container: "text-white  p-3 justify-start space-x-3 flex rounded-md m-3",
  };
  return (
    <div
      className={
        style.container +
        ` ${messages.user.name != "ChatGPT" ? "bg-[#202123]" : "bg-[#444654]"} `
      }
    >
      {/* user profile */}

      <div>
        <img
          src={messages.user.avatar}
          alt="user logo"
          className="h-10 w-10 rounded-md"
        />
      </div>

      {/* message */}
      <div className="flex-1 ml-2">
        <p>{messages.text}</p>
      </div>
    </div>
  );
};

export default MessageContainer;
