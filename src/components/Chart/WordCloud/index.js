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
        <svg width="117" height="59" viewBox="0 0 117 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path onClick={ changeAll } d="M21.972 4.98562C23.1981 1.97124 26.1281 0 29.3823 0H81.781C84.7787 0 87.5248 1.67587 88.8956 4.34178L111.006 47.3418C113.743 52.6658 109.877 59 103.891 59H11.8908C6.21113 59 2.34034 53.2467 4.48043 47.9856L21.972 4.98562Z" fill="#669278"/>
          <text x="0" y="50" font-family="Verdana" font-size="35" fill="blue">全部類別</text>
        </svg>

        
      
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