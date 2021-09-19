import React , { useEffect ,useState } from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [12, 90],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 1, //restrict to horizontal
  rotationAngles: [0, 90],
  scale: "log",
  spiral: "rectangular",
  transitionDuration: 1000 //animation
};

export default function WordCloud({ data, multi }) {
  const [graph , setGraph] = useState(<ReactWordcloud options={options} words={data.all} />);

  useEffect(() => {
    setGraph(<ReactWordcloud options={options} words={data.all} />)
  }, [data]);

  const changeAll = () => {
    setGraph(<ReactWordcloud options={options} words={data.all} />)
  }
  const changePublish = () => {
    setGraph(<ReactWordcloud options={options} words={data.出版} />)
  }
  const changeLocal = () => {
    setGraph(<ReactWordcloud options={options} words={data.地方創生} />)
  }
  const changeComic = () => {
    setGraph(<ReactWordcloud options={options} words={data.插畫漫畫} />)
  }
  const changePhoto = () => {
    setGraph(<ReactWordcloud options={options} words={data.攝影} />)
  }
  const changeEducation = () => {
    setGraph(<ReactWordcloud options={options} words={data.教育} />)
  }
  const changeFashion = () => {
    setGraph(<ReactWordcloud options={options} words={data.時尚} />)
  }
  const changeSociety = () => {
    setGraph(<ReactWordcloud options={options} words={data.社會} />)
  }
  const changeTech = () => {
    setGraph(<ReactWordcloud options={options} words={data.科技} />)
  }
  const changeSpace = () => {
    setGraph(<ReactWordcloud options={options} words={data.空間} />)
  }
  const changeArt = () => {
    setGraph(<ReactWordcloud options={options} words={data.藝術} />)
  }
  const changePerform = () => {
    setGraph(<ReactWordcloud options={options} words={data.表演} />)
  }
  const changeDesign = () => {
    setGraph(<ReactWordcloud options={options} words={data.設計} />)
  }
  const changeGame = () => {
    setGraph(<ReactWordcloud options={options} words={data.遊戲} />)
  }
  const changeMovie = () => {
    setGraph(<ReactWordcloud options={options} words={data.電影動畫} />)
  }
  const changeMusic = () => {
    setGraph(<ReactWordcloud options={options} words={data.音樂} />)
  }
  const changeFood = () => {
    setGraph(<ReactWordcloud options={options} words={data.飲食} />)
  }
  
  if(multi){
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
  else{
    return (
      <div>
        { graph }
      </div>
    );
  }
  
}