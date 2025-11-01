"use client";

import React, { useState } from "react";
import { site } from "@/data/site";

type Message = { from: "bot" | "user"; text: string };

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: site.bio.en },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  function send() {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "user", text: input }]);
    // placeholder bot response: simulate typing and then respond
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: `Thanks — I received: "${input}". (This chat supports RAG import for richer responses)`,
        },
      ]);
    }, 900 + Math.min(1200, input.length * 30));
    setInput("");
  }

  React.useEffect(() => {
    // auto-scroll to bottom when messages change
    const el = scrollRef.current;
    if (el) {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 50);
    }
  }, [messages, isTyping]);

  return (
    <div className='w-full h-[82vh] max-w-5xl p-0 rounded-lg mx-auto'>
      <div className='flex flex-col h-full shadow-lg rounded-lg overflow-hidden bg-white/95'>
        <div className='px-4 py-3 border-b'>
          <h2 className='text-xl font-bold'>AISSAOUI ISMAIL</h2>
        </div>

        <div
          ref={scrollRef}
          className='p-4 overflow-auto flex-1 flex flex-col gap-3'
          id='chat-scroll'
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded max-w-[85%] ${
                msg.from === "bot"
                  ? "bg-gray-100 self-start"
                  : "bg-violet-100 self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className='p-2 rounded bg-gray-100 self-start inline-flex items-center gap-2'>
              <span className='inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse' />
              <span className='inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150' />
              <span className='inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300' />
            </div>
          )}
        </div>

        <div className='p-4 border-t flex gap-3'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='flex-1 px-3 py-2 rounded border'
            placeholder='Ask about my projects or skills...'
          />
          <button
            onClick={send}
            className='px-4 py-2 rounded bg-violet-600 text-white'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
