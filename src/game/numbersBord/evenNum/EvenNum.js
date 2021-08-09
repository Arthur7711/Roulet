import React from "react";
import { object, number, func } from "prop-types";

function EvenNum({ even, isClicked, num }) {
  return (
    <div style={even} onClick={() => isClicked(num)}>
      {num}
    </div>
  );
}

EvenNum.protoType = {
  even: object,
  isClicked: func,
  num: number,
};

export default EvenNum;
