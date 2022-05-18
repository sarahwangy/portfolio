import "./style.scss";
import Photo from "../../assets/img/me.jpeg";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro">
      {/* 为什么要用left 和left wrapper，可以只用一个吗。？ */}
      <div className="left">
        <div className="left-wrapper">
          <h2 className="name-intro">Hello, My name is </h2>
          <h1 className="name">Sarah </h1>
          <div className="title">
            <div className="title-wrapper">
              <div className="title-item">Ethusiastic Dev ❤️ </div>
              <div className="title-item">Content Creator ✍🏻 </div>
              <div className="title-item">MERN Stack Dev 💻 </div>
              <div className="title-item">Cross Platform Dev 📱 </div>
              <div className="title-item">Life Lover 🌏 </div>
            </div>
          </div>
          <div className="desc">
            I’m a full-stack developer specializing in building creative websites.
            <div className="desc">
              Currently, I’m focused on building responsive full-stack web applications.
            </div>
          </div>
          <div className="button-intro">
            <Link to={`/contact`}>
              <button> Hire Me</button>
            </Link>
            <Link to={`/about`}>
              <button> Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="right">
        {/* <div className="backg"></div> */}
        <img src={Photo} alt="photo" className="img" />
      </div>
    </div>
  );
}
