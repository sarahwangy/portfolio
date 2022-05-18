import "./style.scss";
import Team from "../../assets/img/code2.png";
import FloatPart from "../../components/floatPart";
import Crown from "../../assets/img/crown.png";
import ThumbUp from "../../assets/img/thumbup.png";
import { motion } from "framer-motion";
export default function About() {
  const transition = { duration: 2, type: "spring" };
  return (
    <>
      <div className="about">
        <div className="left">
          <div className="card bg"></div>
          <div className="card">
            <motion.img
              initial={{ position: "absolute", top: "0%", left: "98%" }}
              whileInView={{ left: "8%" }}
              transition={transition}
              src={Team}
              alt=""
              className="img"
            />
          </div>
        </div>
        <div className="right">
          <h1
            style={{ display: "flex", gap: "10px", color: "green", fontSize: "25px" }}
            className="title"
          >
            About Me{" "}
            <img
              src="https://media4.giphy.com/media/3nbbQlUpGDdgA/giphy.gif?cid=ecf05e4772swec1049uxgqay1gxou4j3oe8rl0sfz8s8w3jn&rid=giphy.gif&ct=g"
              width="30px"
            />
          </h1>
          <p className="sub">
            I am done with my portfolio website to showcase my projects and my skills.
          </p>
          <p className="desc">
            My name is Sarah, and I'm a self-taught web developer and I accepted
            <b style={{ color: "green" }}> #100DaysOfCodeChallenge </b> in{" "}
            <a
              style={{ color: "green", fontWeight: "500" }}
              href="https://twitter.com/happySarahss"
            >
              Twitter
            </a>{" "}
            that I shared and updated what I learned to become an awesome software developer every
            day. I used Twitter on my computer just for updates, networking, and talking to my
            coding friends. I read LinkedIn has been a huge asset for other developers.
            <p className="desc">
              My journey into web development is fascinating; let's say the travel wasn't a direct
              route. I would like to build creative websites and bring business values to
              stakeholders.
            </p>
            My goal is to start applying to jobs by April. I want to finish my project, make sure my
            other projects are in top shape to put them on the portfolio.
            <p className="desc">
              <b style={{ color: "green", fontSize: "18px" }}>
                I believe my dream of becoming an aswsome software developer will come true soon!❤️
              </b>
            </p>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ position: "absolute", top: "14%", left: "98%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        style={{ position: "absolute", top: "14%", left: "68%" }}
      >
        <FloatPart image={Crown} txt1="Web" txt2="-Developer" />
      </motion.div>
      <motion.div
        initial={{ position: "absolute", bottom: "6rem", left: "25rem" }}
        whileInView={{ left: "35rem" }}
        transition={transition}
        style={{ position: "absolute", bottom: "6rem", left: "35rem" }}
      >
        <FloatPart image={ThumbUp} txt1="Life" txt2="-Lover" />
      </motion.div>
    </>
  );
}
