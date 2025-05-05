"use client"
import React, { useState } from 'react';
import { TbMessageDots } from "react-icons/tb";
import { FiSmile, FiSend, FiPaperclip } from 'react-icons/fi';
import { RxCross1 } from "react-icons/rx";
//import 'emoji-mart/css/emoji-mart.css';

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
    const toggleChat = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSendMessage = () => {
        if (message.trim() !== "") {
          setMessages([...messages, message]);
          setMessage(""); // Mesaj gönderildikten sonra kutuyu temizler.
        }
      };
    
      const addEmoji = (emoji) => {
        setMessage(message + emoji.native);
      };

  return (
    <div className="fixed bottom-4 right-5 md:bottom-6 md:right-6 lg:bottom-7 lg:right-7 z-[9999]">
      {/* Mesajlaşma ikonu */}
      <button
        onClick={toggleChat}
        className="flex bg-irenicOrange border-white border w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full text-white shadow-lg focus:outline-none transition-all duration-300 items-center justify-center"
      >
        {isOpen ? (
        <RxCross1 className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />) :
        (<TbMessageDots className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 " />)
        }
      </button>

      {/* Sohbet kutusu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-64 md:w-72 lg:w-[350px] lg:h-[600px] bg-white shadow-lg rounded-lg  transition-all duration-300 font-montserrat ">
            <div  className="bg-darkB flex w-full h-[65px] rounded-t-lg gap-4 items-center justify-start px-3 py-2">
                <div className="flex bg-white h-10 w-10 rounded-full items-center justify-center">
                    <span className="text-irenicOrange text-[20px] font-semibold ml-5">Irenic</span>
                </div>
                <h3 className="text-white text-[16px]">Miramare Hotels</h3>
            </div>


          <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between">
          <div className="flex-1 overflow-y-auto">
          <div className="text-gray-800 text-[14px] md:text-[16px] lg:text-[18px] leading-normal mb-4 mr-10 bg-gray-100 p-2 rounded-lg">
            <p>Merhaba! Size nasıl yardımcı olabiliriz?</p>
            <p>Hello! How may I help you?</p>
            <p>Здравствуйте! Чем мы можем Вам помочь?</p>
            <p>Hallo! Wie kann ich Ihnen helfen?</p>
          </div>
          
          {/* Gönderilen mesajlar */}
          {messages.map((msg, index) => (
              <div key={index} className="bg-grayLight p-2 rounded-lg mb-2 ml-12 text-sm flex-wrap whitespace-normal flex w-5/6 flex-1 break-words h-auto bg-gray-100">
                <p className="text-[14px] text-darkB ">{msg}</p>
              </div>
            ))}
          </div>


           {/* Mesaj yazma alanı */}
           <div className="border-t border-gray-300 pt-2 flex items-center bottom-5 absolute  ">
            
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="flex-1 p-2 border border-gray-300 rounded-md text-sm md:text-base lg:text-lg focus:outline-none"
            />
            <div className="relative">
              <FiSmile
                className="text-gray-500 w-5 h-5 cursor-pointer mx-2"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              />
              {showEmojiPicker && (
                <div className="absolute bottom-10 right-0 z-10">
                  <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
              )}
            </div>
            <FiPaperclip className="text-gray-500 w-4 h-4 cursor-pointer mr-1" />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600 transition duration-300"
            >
              <FiSend className="w-[18px] h-[18px]" />
            </button>
          </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
