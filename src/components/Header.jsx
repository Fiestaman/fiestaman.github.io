import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header mb-8">
      <input className="hidden group peer" id="menu-toggle" type="checkbox" />
      <label
        className="menu-button-container hidden h-full w-8 items-center justify-center flex-col cursor-pointer group-checked:mt-0 group-checked:rotate-[405deg] group-checked:bg-white/0"
        htmlFor="menu-toggle"
      >
        <div className="menu-button block bg-white absolute h-1 w-8 rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.23, 1, 0.32, 1)] before:block before:bg-white before:absolute before:h-1 before:w-8 before:rounded-sm before:transition-transform before:duration-[400ms] before:ease-[cubic-bezier(0.23, 1, 0.32, 1)] after:block after:bg-white after:absolute after:h-1 after:w-8 after:rounded-sm after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.23, 1, 0.32, 1)] before:content-[''] before:mt-[-8px] after:content-[''] after:mt-2 before:group-checked:mt-0 before:group-checked:rotate-[405deg] after:group-checked:rotate-[-405deg"></div>
      </label>
      <ul className="menu flex flex-col m-0 p-0 absolute top-0 mt-[50px] left-0 w-full justify-center items-center">
        <li className="mx-4 my-0 overflow-hidden h-0 m-0 p-0 border-none transition-[height] duration-[400ms] ease-[cubic-bezier(0.23, 1, 0.32, 1)] peer-checked:border peer-checked:border-[#333] peer-checked:h-10 peer-checked:p-2 peer-checked:transition-[height] peer-checked:duration-[400ms] peer-checked:ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex justify-center py-2 w-full text-white bg-[#222] border-b border-[#444]">
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li className="mx-4 my-0 overflow-hidden h-0 m-0 p-0 border-none transition-[height] duration-[400ms] ease-[cubic-bezier(0.23, 1, 0.32, 1)] peer-checked:border peer-checked:border-[#333] peer-checked:h-10 peer-checked:p-2 peer-checked:transition-[height] peer-checked:duration-[400ms] peer-checked:ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex justify-center py-2 w-full text-white bg-[#222] border-b border-[#444]">
          <Link className="navLink" to="/projects">
            Projects
          </Link>
        </li>
        <li className="mx-4 my-0 overflow-hidden h-0 m-0 p-0 border-none transition-[height] duration-[400ms] ease-[cubic-bezier(0.23, 1, 0.32, 1)] peer-checked:border peer-checked:border-[#333] peer-checked:h-10 peer-checked:p-2 peer-checked:transition-[height] peer-checked:duration-[400ms] peer-checked:ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex justify-center py-2 w-full text-white bg-[#222] border-b border-[#444]">
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li className="mx-4 my-0 overflow-hidden h-0 m-0 p-0 border-none transition-[height] duration-[400ms] ease-[cubic-bezier(0.23, 1, 0.32, 1)] peer-checked:border peer-checked:border-[#333] peer-checked:h-10 peer-checked:p-2 peer-checked:transition-[height] peer-checked:duration-[400ms] peer-checked:ease-[cubic-bezier(0.23, 1, 0.32, 1)] flex justify-center py-2 w-full text-white bg-[#222]">
          <Link className="navLink" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
