import React, { useState } from "react";
import Bid from "./bid/Bid";
import Spin from "./spin/Spin";
import styles from "./Game.module.css";
import NumbersBord from "./numbersBord/NumbersBord";
import Ranges from "./ranges/Ranges";


export default function Game() {
  const [money, setMoney] = useState(500);
  const [state, setState] = useState([]);
  const [colorWin, setColorWin] = useState([]);
  const [winNum, setWinNum] = useState(0);
  const [blind, setBlind] = useState(0);

  const getranfom = () => {
    const r = Math.floor(Math.random() * 37);
    console.log(r, state);

    if (winNum === r) {
      console.log("winning by number");
      setWinNum(0);
      setState([]);
      setColorWin([]);
      setMoney(money + blind * 37);
      setBlind(0);
      return r;
    }
    if (state.filter((item) => item === r).length === 1) {
      console.log("winner Range");
      setWinNum(0);
      setState([]);
      setColorWin([]);
      setMoney(money + blind * 3);
      setBlind(0);
      return r;
    }
    if (colorWin.filter((item) => item === r).length === 1) {
      console.log("winning by color");
      setWinNum(0);
      setState([]);
      setColorWin([]);
      setMoney(money + blind * 2);
      setBlind(0);
      return r;
    } else {
      setWinNum(0);
      setState([]);
      setColorWin([]);
      setBlind(0);
      return r;
    }
  };

  const checkColor = (arr) => {
    console.log(arr);
    setColorWin(arr);
  };

  const checkRanges = (arr) => {
    console.log(arr);
    setState(arr);
  };

  const isClicked = (nm) => {
    console.log(nm);
    setWinNum(nm);
  };

  const makeABid = (bid) => {
    setMoney(money - bid);
    setBlind(blind + bid);
  };

  return (
    <div className={styles.gameBord}>
      <div>
        <div>Bank:{money}</div>
        <Spin getranfom={getranfom} />
        {/* <Winner /> */}
        <div>
          <NumbersBord isClicked={isClicked} checkColor={checkColor} />
          <Ranges checkRanges={checkRanges} />
        </div>
        <Bid blind={blind} makeABid={makeABid} />
      </div>
    </div>
  );
}
