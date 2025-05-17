"use client";

import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Timer from "./components/Timer.jsx";
import Paragraph from "./components/Paragraph.jsx";
import Footer from "./components/Footer.jsx";

// Sample paragraphs for typing tests
const sampleTexts = [
  "dream teach high lose break paint draw push wish eye run throw old push look think back kick throw year love look small plan love catch send bring take word start stand carry cry plant write carry stop fly bake win play hit walk try love smell long big rest stand",
  "rest part laugh make look smell throw show play make open stand walk use head smell fall grow smell build high dream think start paint climb pick leave learn drive hit drive watch join run back plan day give cry part smell find love swim check love long",
  "love cry fix day keep send look turn win guess wish keep use draw try fly smile cook show part move ask look plan great make laugh long check life join life talk give clean think leave year read man pull open tell catch draw think wait ask",
  "play carry turn push rest man big win word clean run work word speak beat stand place feel open turn fly push climb kick long hate smile play jump place smell climb dance try join send hand ride turn smile play check drive fly pick hope pick feel",
  "cry plan hate swim walk leave stop check throw know send walk check head drop stand know wish need love drive stand head pull play back pick long close dance swim hate join cook help walk way laugh catch look old turn swim plant lose drive wish beat",
  "drop sing grow stand pull guess plant show drive word speak speak speak bake keep walk way hear laugh hit high man work work long wait leave read lose call man stop long leave kick sing smile fact hit cook talk make try high help start eye hate",
  "fix bring press start know walk keep throw start cook lose great like want build hate small bring long hate old play old swim rest place want plant smell play wish year start pull right push work good place guess run feel like part climb talk head hear",
  "pull run bake ask watch like jump laugh stop kick keep use find man speak old help leave paint kick join find start dream rest high give time start look dream ask like break tell pull kick wish hit laugh like use thing keep wait find write walk",
  "bring good cry hear wish need love right carry send love big start fact start guess cook place bring leave bring beat cook jump fly break dream way catch part show life rest bring grow ask push push dream swim write rest drive walk dream laugh place work",
  "check check laugh start dance thing show leave lose right want fact show small love lose climb day back make dance life find play talk try like wait walk draw take run pull carry small carry good call climb dance smile push laugh help draw smell day give",
  "laugh call watch small head bring make thing stand build time smell check find throw walk ride ask run jump plan ride build plant plant ride check make love big watch work plan build carry plant ride tell show fact need fact good clean jump head life fact",
  "check try know hate life word keep jump call plant join find play swim turn small feel carry show year sing plant use smell break drop fly great move wish hope lose teach use beat dream start use turn hate paint clean write watch work plan life hit",
  "hand tell draw start turn check back word play hate push hear carry want send drop beat pick rest long high hate ask head join call stop wait wait throw day close walk head fix try use grow thing feel time leave look smile win tell tell push",
  "pull think fall smell back big hope fact plan check make draw look pull swim break man day small take clean join love find way sing learn cook ask cry smell win smile lose keep ride thing life win give dream jump good man speak cook big stop",
  "right call eye pick climb turn move plan cry learn play paint like bring stop great rest win pick day bake want start fact break life fix place want like carry part dance need teach time small ask check day right cook life like guess break rest lose",
  "time read make drop hate win push bring walk read grow watch turn ask time show start hand long back check help dance clean good catch hand kick small keep throw hate catch fact carry hope plant hope win wish move press turn jump drive try right dream",
  "wish start use turn hate paint clean write watch work plan life hit hand tell draw start turn check back word play hate push hear carry want send drop beat pick rest long high hate ask head join call stop wait wait throw day close walk head fix",
  "try use grow thing feel time leave look smile win tell tell push keep wait find write walk bring good cry hear wish need love right carry send love big start fact start guess cook place bring leave bring beat cook jump fly break dream way catch part",
  "show life press start know walk keep man big win word clean run work word speak beat stand place feel open turn fly push climb kick long hate smile play jump place smell climb dance try join send hand ride turn smile play check drive fly pick hope pick feel cry plan hate swim walk leave stop check throw know",
];

function App() {
  const [text, setText] = useState(sampleTexts[0]);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(15); // Default to 15 seconds
  const [timeOption, setTimeOption] = useState(15);
  const [status, setStatus] = useState("idle"); // idle, running, finished
  const [startTime, setStartTime] = useState(null);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);

  // Start the test
  const startTest = () => {
    setStatus("running");
    setStartTime(Date.now());
    setInput("");
    setCurrentCharIndex(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setTimer(timeOption);
  };

  // Finish the test
  const finishTest = () => {
    setStatus("finished");

    // Calculate WPM
    const timeElapsed = (Date.now() - (startTime || 0)) / 1000 / 60; // in minutes
    const wordsTyped = input.trim().split(/\s+/).length;
    const calculatedWPM = Math.round(wordsTyped / timeElapsed);
    setWordsPerMinute(calculatedWPM);

    // Calculate accuracy
    const totalChars = correctChars + incorrectChars;
    const calculatedAccuracy =
      totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;
    setAccuracy(calculatedAccuracy);
  };

  // Reset the test
  const resetTest = () => {
    setStatus("idle");
    setInput("");
    setCurrentCharIndex(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setTimer(timeOption);
    setWordsPerMinute(0);
    setAccuracy(100);
  };

  // Get a new text
  const getNewText = () => {
    let newText;
    do {
      newText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    } while (newText === text);

    setText(newText);
    resetTest();
  };

  // Change time option
  const changeTimeOption = (time) => {
    setTimeOption(time);
    setTimer(time);
    if (status !== "idle") {
      resetTest();
    }
  };

  // Handle user typing
  const handleTyping = (e) => {
    if (status !== "running") return;

    if (e.key.length === 1) {
      const newInput = input + e.key;
      setInput(newInput);

      // Check if character is correct
      if (e.key === text[currentCharIndex]) {
        setCorrectChars((prev) => prev + 1);
      } else {
        setIncorrectChars((prev) => prev + 1);
      }

      setCurrentCharIndex((prev) => prev + 1);

      // Check if test is complete
      if (newInput.length === text.length) {
        finishTest();
      }
    } else if (e.key === "Backspace") {
      if (input.length > 0) {
        setInput(input.slice(0, -1));
        setCurrentCharIndex((prev) => prev - 1);
      }
    }
  };

  // Start the test when user starts typing
  const handleKeyDown = (e) => {
    if (status === "idle" && e.key === " ") {
      startTest();
    }

    // Prevent tab from changing focus
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  // Timer countdown
  useEffect(() => {
    let interval;

    if (status === "running" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            finishTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [status, timer]);

  return (
    <div className="min-h-screen text-gray-100">
      <NavBar />
      <main className="container mx-auto px-4 pt-8 pb-4 flex flex-col items-center">
        <Timer
          timer={timer}
          timeOption={timeOption}
          changeTimeOption={changeTimeOption}
          status={status}
        />

        <Paragraph
          text={text}
          input={input}
          currentCharIndex={currentCharIndex}
          handleKeyDown={handleKeyDown}
          handleTyping={handleTyping}
          status={status}
        />

        {/* Results display */}
        {status === "finished" && (
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Results</h2>
            <div className="flex gap-8">
              <div>
                <p className="text-gray-400">WPM</p>
                <p className="text-3xl font-bold">{wordsPerMinute}</p>
              </div>
              <div>
                <p className="text-gray-400">Accuracy</p>
                <p className="text-3xl font-bold">{accuracy}%</p>
              </div>
            </div>
          </div>
        )}

        {/* Control buttons */}
        <div className="flex gap-4">
          {status === "finished" && (
            <button
              onClick={resetTest}
              className="min-w-[100px] px-4 py-2 bg-transparent border border-gray-600 rounded-lg hover:bg-[#0f0f0f] transition-colors"
            >
              Restart
            </button>
          )}

          <button
            onClick={getNewText}
            className="min-w-[100px] px-4 py-2 bg-transparent border border-gray-600 rounded-lg hover:bg-[#0f0f0f] transition-colors"
          >
            New Text
          </button>

          {status === "finished" && (
            <button
              onClick={() => {
                getNewText();
              }}
              className="min-w-[100px] px-4 py-2 bg-[#0d419c] rounded-lg hover:bg-[#314458] transition-colors"
            >
              Next Test
            </button>
          )}
        </div>

        {/* Instructions */}
        {status === "idle" && (
          <p className="text-gray-400 mt-6 text-center">
            Click on the text area and press "SPACEBAR" to begin the test
          </p>
        )}

        <p className="mt-4 text-sm">
          Created by <span className="bg-[#3f3f3f] px-2">Sanjit Rao</span>.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
