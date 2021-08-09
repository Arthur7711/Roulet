import React from "react";
import s from "./Ranges.module.css";
import { func } from "prop-types";

function Ranges({ checkRanges }) {
  const range1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const range2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const range3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  return (
    <div className={s.ranges}>
      <div onClick={() => checkRanges(range1)}>
        <span>1-12</span>
      </div>
      <div onClick={() => checkRanges(range2)}>
        <span>13-24</span>
      </div>
      <div onClick={() => checkRanges(range3)}>
        <span>25-36</span>
      </div>
    </div>
  );
}

Ranges.protoType = {
  checkRanges: func.isRequired,
};

export default Ranges;
