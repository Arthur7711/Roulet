import React, { useEffect, useState } from "react";
import s from "./Spin.module.css";
import spin from "../imgs/spin.png";

export default function Spin({ getranfom }) {
  const [stile, setStile] = useState(false);
  const [oneRange, setOneRange] = useState([]);
  const [oneColor, setOneColor] = useState([]);
  const [rand, setRand] = useState(Math.floor(Math.random() * 38));

  const styles = { transform: "rotate(1800deg)", transition: "3s" };

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
    <div className={s.spinPart}>
      <div className={s.spin} onClick={() => theGame2()}>
        <img alt="spin" src={spin} style={stile ? styles : null} />
      </div>
      <div className={s.result}>
        <b>{rand}</b>
      </div>
    </div>
  );
}
