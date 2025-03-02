import React from "react";
import "./Button.css";

import arrow from "../../assets/About/SVGRepo_iconCarrier.png";

function Button() {
  return (
    <div className="p-2 button-wrapper">
      <a href="#" className="flex items-center justify-center gap-2">
        <div className="arrow rounded flex items-center justify-center p-3 ">
          <img src={arrow} alt="" />
        </div>
        <span>بروفايل الشركة</span>
      </a>
    </div>
  );
}

export default Button;
