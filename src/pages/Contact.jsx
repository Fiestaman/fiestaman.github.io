import { Link } from "react-router-dom";
import LIIcon from "../assets/LinkedIn96.svg";
import GHIcon from "../assets/Github96.svg";
import EIcon from "../assets/Email.svg";

export default function Contact() {
  return (
    <div className="Contact h-full flex flex-col justify-center items-center">
      <h1 className="contactTitle text-4xl">
        Want to contact me? Reach me at any of the links below:
      </h1>
      <div className="icons flex justify-center">
        <div className="icon flex m-2.5">
          <Link to="https://www.linkedin.com/in/annson/" target="_blank">
            <img src={LIIcon} alt="LinkedIn" />
            LinkedIn
          </Link>
        </div>
        <div className="icon flex m-2.5">
          <Link to="https://www.github.com/Fiestaman/" target="_blank">
            <img src={GHIcon} alt="Github" />
            Github
          </Link>
        </div>
        <div className="icon flex m-2.5">
          <Link to="mailto:a@annson.dev?subject=Website Inquiry">
            <img src={EIcon} alt="Email" className="w-24" />
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
