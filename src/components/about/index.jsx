import "./style.scss";
import Team from "../../assets/img/code2.png";
import FloatPart from "../floatPart";
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
          <h1 className="title">About Me</h1>
          <p className="sub">
            I am done with my portfolio website, it's very simple, just to showcase my projects.
          </p>

          <p className="desc">
            My goal is to start applying to jobs by April. I want to finish my project, make sure my
            other projects are in top shape to put them on the portfolio. I also deleted all social
            media from my phone, this has helped me tremendously to focus and not compare myself to
            others. Social media is very toxic if you do not know how to use it. It affects your
            mental state. I only use Twitter on my computer just for updates, networking, and
            talking to my coding friends. I read LinkedIn has been a huge asset for other
            developers. My goal is to start applying to jobs by April. I want to finish my project,
            make sure my other projects are in top shape to put them on the portfolio.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ position: "absolute", top: "14%", left: "98%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        style={{ position: "absolute", top: "14%", left: "68%" }}
      >
        <FloatPart image={Crown} txt1="Web" txt2="Developer" />
      </motion.div>
      <motion.div
        initial={{ position: "absolute", bottom: "8rem", left: "25rem" }}
        whileInView={{ left: "35rem" }}
        transition={transition}
        style={{ position: "absolute", bottom: "8rem", left: "35rem" }}
      >
        <FloatPart image={ThumbUp} txt1="Life" txt2="Lover" />
      </motion.div>
    </>
  );
}
