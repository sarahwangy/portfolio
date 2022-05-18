import { useRef, useState } from "react";

import "./style.scss";
import Phone from "../../assets/img/phone.png";
import Email from "../../assets/img/email.jpeg";

import Address from "../../assets/img/address.png";

import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [message, setMessage] = useState(false);

  const handleClose = () => {
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact">
      {/* <div className="backgro"></div> */}
      <div className="wrapper">
        <div className="left">
          <h1 className="title"> Let US Contact</h1>
          <div style={{ fontStyle: "italic" }}>
            Click my email address or send message and click 'submit' button
          </div>
          <div className="info">
            {/* <div className="info-item">
              <img src={Phone} alt="" className="icon" />
              +0460 297 889
            </div> */}

            <div className="info-item">
              <img src={Email} alt="" className="icon" />
              <a href="mailto:sarahwangdk@gmail.com">sarahwangdk@gmail.com</a>
            </div>
            <div className="info-item">
              <img src={Address} alt="" className="icon" />
              Melbourne, VIC
            </div>
          </div>
        </div>

        <div className="right">
          <p className="desc">
            <b> what is your story?</b>I am not saying Twitter is not a powerful tool, last week I
            got connected to so many people from Automattic it's not even funny
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows={5}
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
          </form>
          {message && (
            <div className={"alert"}>
              <strong>Thanks!</strong> I will reply ASAP :)
              <button onClick={handleClose} className="closebtn">
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
