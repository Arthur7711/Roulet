import React from "react";
import { func, number } from "prop-types";
import chip1 from "../imgs/purpleChip.png";
import chip2 from "../imgs/blackChip.png";
import chip3 from "../imgs/blueChip.png";
import styles from "./Bid.module.css";

function Bid({ makeABid, blind }) {
  return (
    <div className={styles.bidPage}>
      <div className={styles.chips}>
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

Bid.protoType = {
  makeABid: func.isRequired,
  blind: number.isRequired,
};

export default Bid;
