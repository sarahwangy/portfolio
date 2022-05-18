import "./style.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsTwitter } from "react-icons/bs";
import Logo from "../../assets/img/logo-1.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Toggle from "../toggle";

export default function Topbar() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        border: "1px solid red",
      }}
      className="topbar "
    >
      <div className="wrapper">
        <div className="left">
          <Link to={`/`}>
            <img
              src={Logo}
              style={{ width: "100px", borderRadius: "100%", border: "5px solid #59b256" }}
            />
          </Link>
          <Link to={`/`}>
            <div className="itemContainer">
              <span>Home</span>
            </div>
          </Link>
          <Link to={`/about`}>
            <div className="itemContainer">
              <span>About</span>
            </div>
          </Link>
          <Link to={`/skill`}>
            <div className="itemContainer">
              <span>Skills</span>
            </div>
          </Link>
          <Link to={`/project`}>
            <div className="itemContainer">
              <span>Projects</span>
            </div>
          </Link>
          <Link to={`/contact`}>
            <div className="itemContainer">
              <span>Contact</span>
            </div>
          </Link>
        </div>
        <div className="right">
          {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> */}
          <Toggle />
        </div>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="ml-5 flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sarah-wang09/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="ml-5 flex justify-between items-center w-full text-gray-300"
              href="https://github.com/sarahwangy"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="ml-5 flex justify-between items-center w-full text-gray-300"
              href="mailto:sarahwangdk@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1D9BF0]">
            <a
              className="ml-5 flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/happySarahss"
            >
              Twitter <BsTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
