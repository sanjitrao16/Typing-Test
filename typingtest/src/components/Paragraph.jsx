("use client");

import { useRef, useEffect } from "react";

function Paragraph({
  text,
  input,
  currentCharIndex,
  handleKeyDown,
  handleTyping,
  status,
}) {
  const inputRef = useRef(null);

  // Focus the input area when component mounts or status changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [status]);

  // Render character with appropriate styling
  const renderCharacter = (char, index) => {
    let className = "";

    if (index < input.length) {
      className =
        input[index] === char ? "text-green-400" : "text-red-500 bg-red-500/20";
    } else if (index === input.length) {
      className = "bg-gray-500/50 text-gray-300 animate-pulse";
    }

    return (
      <span key={index} className={className}>
        {char}
      </span>
    );
  };

  return (
    <div
      ref={inputRef}
      tabIndex={0}
      onKeyDown={(e) => {
        handleKeyDown(e);
        handleTyping(e);
      }}
      className={`
        w-full max-w-3xl p-6 bg-[#2a2a2a] rounded-lg text-xl font-mono leading-relaxed mb-8 min-h-[200px] outline-none
        focus:ring-2 focus:ring-gray-500 transition-all duration-200 cursor-text
      `}
    >
      {text.split("").map(renderCharacter)}
    </div>
  );
}

export default Paragraph;
