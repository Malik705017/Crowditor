import React , { useState } from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import { all, publish, local, comic, photo, education, fashion, society, tech, space, art, perform, design, game, movie, music, food } from "../../../resources/data/WordCloud";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 2, //restrict to vertical & horizontal
  rotationAngles: [0, 90],
  scale: "log",
  spiral: "archimedean",
  transitionDuration: 1000 //animation
};

export default function WordCloud() {
  const [graph , setGraph] = useState(<ReactWordcloud options={options} words={all} />);

  const changeAll = () => {
    setGraph(<ReactWordcloud options={options} words={all} />)
  }
  const changePublish = () => {
    setGraph(<ReactWordcloud options={options} words={publish} />)
  }
  const changeLocal = () => {
    setGraph(<ReactWordcloud options={options} words={local} />)
  }
  const changeComic = () => {
    setGraph(<ReactWordcloud options={options} words={comic} />)
  }
  const changePhoto = () => {
    setGraph(<ReactWordcloud options={options} words={photo} />)
  }
  const changeEducation = () => {
    setGraph(<ReactWordcloud options={options} words={education} />)
  }
  const changeFashion = () => {
    setGraph(<ReactWordcloud options={options} words={fashion} />)
  }
  const changeSociety = () => {
    setGraph(<ReactWordcloud options={options} words={society} />)
  }
  const changeTech = () => {
    setGraph(<ReactWordcloud options={options} words={tech} />)
  }
  const changeSpace = () => {
    setGraph(<ReactWordcloud options={options} words={space} />)
  }
  const changeArt = () => {
    setGraph(<ReactWordcloud options={options} words={art} />)
  }
  const changePerform = () => {
    setGraph(<ReactWordcloud options={options} words={perform} />)
  }
  const changeDesign = () => {
    setGraph(<ReactWordcloud options={options} words={design} />)
  }
  const changeGame = () => {
    setGraph(<ReactWordcloud options={options} words={game} />)
  }
  const changeMovie = () => {
    setGraph(<ReactWordcloud options={options} words={movie} />)
  }
  const changeMusic = () => {
    setGraph(<ReactWordcloud options={options} words={music} />)
  }
  const changeFood = () => {
    setGraph(<ReactWordcloud options={options} words={food} />)
  }

  return (
    <div>
      <button onClick={ changeAll }>
         全部類別
      </button>
      <button onClick={ changePublish }>
         出版
      </button>
      <button onClick={ changeLocal }>
         地方創生
      </button>
      <button onClick={ changeComic }>
         插畫漫畫
      </button>
      <button onClick={ changePhoto }>
         攝影
      </button>
      <button onClick={ changeEducation }>
         教育
      </button>
      <button onClick={ changeFashion }>
         時尚
      </button>
      <button onClick={ changeSociety }>
         社會
      </button>
      <button onClick={ changeTech }>
         科技
      </button>
      <button onClick={ changeSpace }>
         空間
      </button>
      <button onClick={ changeArt }>
         藝術
      </button>
      <button onClick={ changePerform }>
         表演
      </button>
      <button onClick={ changeDesign }>
         設計
      </button>
      <button onClick={ changeGame }>
         遊戲
      </button>
      <button onClick={ changeMovie }>
         電影動畫
      </button>
      <button onClick={ changeMusic }>
         音樂
      </button>
      <button onClick={ changeFood }>
         飲食
      </button>
      { graph }
    </div>
  );
}