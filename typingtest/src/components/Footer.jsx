import LinkedIn from "../assets/Linkedin.svg";
import Github from "../assets/GitHub.svg";
import Internet from "../assets/Internet.svg";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-4 mt-10">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-y-4 text-white text-sm">
        <a
          className="flex items-center gap-2 hover:text-[#39ff14] transition"
          href="https://www.linkedin.com/in/sanjitrao16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedIn}
            alt="LinkedIn"
            width="25"
            height="25"
            className="invert"
          />
          <span>LinkedIn</span>
        </a>

        <a
          className="flex items-center gap-2 hover:text-[#39ff14] transition"
          href="https://github.com/sanjitrao16/Typing-Test"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Github}
            alt="GitHub"
            width="25"
            height="25"
            className="invert"
          />
          <span>GitHub</span>
        </a>

        <a
          className="flex items-center gap-2 hover:text-[#39ff14] transition"
          href="https://sanjitrao16.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Internet}
            alt="Portfolio"
            width="20"
            height="20"
            className="invert"
          />
          <span>Portfolio</span>
        </a>
      </div>
    </footer>
  );
}
