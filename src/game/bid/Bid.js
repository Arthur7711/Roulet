import React from "react";
import s from "./Bid.module.css";
import chip1 from "../imgs/purpleChip.png";
import chip2 from "../imgs/blackChip.png";
import chip3 from "../imgs/blueChip.png";

export default function Bid({ makeABid, blind }) {
  return (
    <div className={s.bidPage}>
      <div className={s.chips}>
        <div onClick={() => makeABid(1)}>
          <img alt="chip" src={chip1} width="20px" />
        </div>
        <div onClick={() => makeABid(10)}>
          <img alt="chip" src={chip3} width="20px" />
        </div>
        <div onClick={() => makeABid(100)}>
          <img alt="chip" src={chip2} width="20px" />
        </div>
      </div>
      <div>{blind}</div>
    </div>
  );
}
