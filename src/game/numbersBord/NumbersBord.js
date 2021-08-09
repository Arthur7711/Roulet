import React from "react";
import EvenNum from "./evenNum/EvenNum";
import OddNum from "./oddNum/OddNum";
import s from "./NumbersBord.module.css";
import ColorBords from "./colorBords/ColorBords";
import { func } from "prop-types";

const odd = {
  backgroundColor: "black",
  border: "2px solid #fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const even = {
  backgroundColor: "red",
  border: "2px solid #fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

function NumbersBord({ checkColor, isClicked }) {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];

  return (
    <div className={s.bordWidthColors}>
      <div className={s.numbers}>
        {arr.map((num) =>
          num % 2 === 0 ? (
            <OddNum
              key={num.toString()}
              isClicked={() => isClicked(num)}
              odd={odd}
              num={num}
            />
          ) : (
            <EvenNum
              key={num.toString()}
              even={even}
              num={num}
              isClicked={() => isClicked(num)}
            />
          )
        )}
      </div>
      <ColorBords checkColor={checkColor} />
    </div>
  );
}

NumbersBord.protoType = {
  checkColor: func.isRequired,
  isClicked: func.isRequired,
};

export default NumbersBord;
