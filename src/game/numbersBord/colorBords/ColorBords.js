import React from "react";
import s from "./ColorBords.module.css";
import { func } from "prop-types";

function ColorBords({ checkColor }) {
  const redColor = [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
  ];

  const blackColor = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
  ];

  return (
    <div className={s.colours}>
      <div className={s.red} onClick={() => checkColor(redColor)}>
        red
      </div>
      <div className={s.black} onClick={() => checkColor(blackColor)}>
        black
      </div>
    </div>
  );
}

ColorBords.protoType = {
  checkColor: func.isRequired,
};
export default ColorBords;
