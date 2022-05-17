import React from "react";
import "./style.scss";

export default function FloatPart({ image, txt1, txt2 }) {
  return (
    <div className="floating">
      <img src={image} alt="" />
      <span>
        {txt1}

        {txt2}
      </span>
    </div>
  );
}
