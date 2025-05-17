("use client");

function Timer({ timer, timeOption, changeTimeOption, status }) {
  return (
    <div className="Countdown mb-8 flex flex-col items-center">
      <p className="text-sm">TIMER</p>
      {/* Timer display */}
      <div className="Countdown text-6xl font-extrabold bg-[#0f0f0f] px-6 py-3 mt-2 rounded-lg">
        {timer.toString().padStart(2, "0")}
      </div>
      {/* Time options */}
      <div className="flex items-center gap-4 mb-1">
        <button
          onClick={() => changeTimeOption(timeOption === 15 ? 30 : 15)}
          disabled={status === "running"}
          className="text-sm mt-2 px-3 py-1 bg-[#0f0f0f] rounded-md hover:bg-[#161616] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {timeOption === 15 ? "Switch to 30s" : "Switch to 15s"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
