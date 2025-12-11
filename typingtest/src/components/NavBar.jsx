import Home from "../assets/Home.svg";

function NavBar() {
  return (
    <nav className="shadow-[#222222] shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-around items-center">
        <div className="Title-text text-xl font-bold text-[#8cfb79]">
          TypeChamp
        </div>
        <div className="bg-[#60ff4424] py-2 px-3 rounded-2xl">
          <a
            href="#"
            className="flex gap-2 text-[#39ff14] hover:text-[#76cc67] transition-colors"
          >
            <img
              src={Home}
              alt="Home"
              width="25px"
              height="25px"
              className="invert"
            />
            Home
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
