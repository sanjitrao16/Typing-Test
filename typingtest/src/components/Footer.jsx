import LinkedIn from "../assets/Linkedin.svg";
import Github from "../assets/GitHub.svg";
import Internet from "../assets/Internet.svg";

export default function Footer() {
  return (
    <>
      <div className="flex justify-evenly items-center border-t-1 border-t-gray-300 py-3">
        <a
          className="flex gap-2"
          href="https://www.linkedin.com/in/sanjitrao16/"
          target="_blank"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            width="25px"
            height="25px"
            className="invert"
          />
          <p>LinkedIn</p>
        </a>
        <a
          className="flex gap-2"
          href="https://github.com/sanjitrao16/Typing-Test"
          target="_blank"
        >
          <img
            src={Github}
            alt="GitHub"
            width="25px"
            height="25px"
            className="invert"
          />
          <p>GitHub</p>
        </a>
        <a
          className="flex gap-2"
          href="https://sanjitrao16.github.io/"
          target="_blank"
        >
          <img
            src={Internet}
            alt="Internet"
            width="20px"
            height="20px"
            className="invert"
          />
          <p>Portfolio</p>
        </a>
      </div>
    </>
  );
}
