import React, { useState } from "react";
import Timer from "./Timer";
import Paragraph from "./Paragraph.jsx";

export default function TypingEnvironment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [resetKey, setResetKey] = useState(0); // used to trigger resets
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleRestart = () => {
    setIsRunning(false);
    setIsTimeUp(false); // Reset time up state
    setResetKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setIsRunning(false);
    setIsTimeUp(false); // Reset time up state
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className="w-full">
      <Timer
        isRunning={isRunning}
        resetKey={resetKey}
        onTimeEnd={() => setIsTimeUp(true)}
      />
      <Paragraph
        isTimeUp={isTimeUp}
        paragraphIndex={currentIndex}
        setIsRunning={setIsRunning}
        resetKey={resetKey}
      />
      <div className="mt-6 flex justify-center gap-4">
        <button onClick={handleRestart} className="text-white border px-4 py-2">
          Restart
        </button>
        <button onClick={handleNext} className="text-white border px-4 py-2">
          Next Test
        </button>
      </div>
    </div>
  );
}
