import React, { useEffect, useState } from "react";
import spin from "../imgs/spin.png";
import styles from "./Spin.module.css";

export default function Spin({ getranfom }) {
  const [stile, setStile] = useState(false);
  const [oneRange, setOneRange] = useState([]);
  const [oneColor, setOneColor] = useState([]);
  const [rand, setRand] = useState(Math.floor(Math.random() * 38));

  const styleess = { transform: "rotate(1800deg)", transition: "3s" };

  useEffect(() => {
    setOneRange(JSON.parse(localStorage.getItem("range")));
  }, []);

  useEffect(() => {
    setOneColor(JSON.parse(localStorage.getItem("oddEven")));
  }, []);

  useEffect(() => {
    if (stile) {
      setTimeout(() => {
        setStile(false);
        const rend = getranfom();
        setRand(rend);
      }, 3000);
    }
  }, [stile]);

  const theGame2 = () => {
    setStile(!stile);
  };

  return (
    <div className={styles.spinPart}>
      <div className={styles.spin} onClick={() => theGame2()}>
        <img alt="spin" src={spin} style={stile ? styleess : null} />
      </div>
      <div className={styles.result}>
        <b>{rand}</b>
      </div>
    </div>
  );
}
