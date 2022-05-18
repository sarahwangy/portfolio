import React from "react";
import HTML from "../../assets/img/html.png";
import CSS from "../../assets/img/css.png";
import JavaScript from "../../assets/img/javascript.png";
import ReactImg from "../../assets/img/react.png";
import Node from "../../assets/img/node.png";
import AWS from "../../assets/img/aws.png";
import GitHub from "../../assets/img/github.png";
import Tailwind from "../../assets/img/tailwind.png";
import Mongo from "../../assets/img/mongo.png";

import { useContext } from "react";
import { ThemeContext } from "../../context";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div name="skills" className="w-full h-screen bg-[#fff] text-gray-300">
      {/* Container */}
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode && "white",
          // border: "1px solid red",
          height: "calc(120vh - 70px)",
        }}
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className=" p-2 shadow-md text-black text-4xl font-bold inline border-b-4 cursor-pointer border-pink-600 bg-gradient-to-r from-sky-300 to-indigo-500 rounded-lg ">
              Skills
            </p>
            <p className="text-black font-medium py-9 bg-gradient-to-l  ">
              These are the technologies I've worked with
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="cursor-pointer shadow-md shadow-[pink] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="cursor-pointer shadow-md shadow-[#0069c2] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="cursor-pointer shadow-md shadow-[orange] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="cursor-pointer shadow-md shadow-[#0EA5E9] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">REACT</p>
            </div>
            <div className="cursor-pointer cursor-pointer shadow-md shadow-[gray] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="cursor-pointer shadow-md shadow-[#65a30d] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
              <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md shadow-[#0891b2] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
              <p className="my-4">Tailwind</p>
            </div>
            <div className="cursor-pointer shadow-md shadow-[green] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
              <p className="my-4">MONGO DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
