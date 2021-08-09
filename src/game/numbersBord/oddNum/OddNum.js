import React from "react";
import { object, number, func } from "prop-types";

function OddNum({ odd, isClicked, num }) {
  
  return (
    <div style={odd} onClick={() => isClicked(num)}>
      {num}
    </div>
  );
}

OddNum.protoType = {
  odd: object.isRequired,
  isClicked: func.isRequired,
  num: number.isRequired,
};

export default OddNum;
