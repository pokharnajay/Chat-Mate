/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useAuthContext } from "../Context/AuthContext";
import useConversation from "../zustand/useConversation";
import { extractTime } from "../utils/extractTime";

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id 
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const bubbleColor = fromMe ? 'bg-blue-500/80' : 'bg-gray-800/70'
  const profilepic = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture
  const formatedTime = extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? "pop" : ""

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilepic} alt="Profile" className=""/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor} max-w-[60%] ${shakeClass}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formatedTime}</div>
      </div>
   
    </>
  );
};

export default Message;
