import React from "react";

const Messages = ({ message }) => {
  const chatGPTbot = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${chatGPTbot && "bg-gray-500"}`}>
      <div className="flex max-2xl px-10 space-x-5 mx-auto">
        <img
          src={message.user.avatar}
          alt="user"
          className="h-8 w-8 rounded-full"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Messages;
