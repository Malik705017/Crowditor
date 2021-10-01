import React , { useEffect ,useState, useMemo } from "react";
import ReactWordcloud from "react-wordcloud";
import { colors } from "../../../resources/data/Color";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import ButtonGroup from "./ButtonGroup";



export default function WordCloud({ data, multi }) {
  const options = useMemo(() => {
    return({
      colors: [colors.color1, colors.color2,colors.color3,colors.color4,colors.color5],
      enableTooltip: multi? true: false,
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
    });
  }, [multi]);

  const [graph , setGraph] = useState(<ReactWordcloud options={options} words={data.all} />);

  useEffect(() => {
    setGraph(<ReactWordcloud options={options} words={data.all} />)
  }, [data, options]);
  
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

  const Farray = ({id}) => {
    switch(id){
      case 0:
        changeAll();
        break;
      case 1:
          changePublish();
          break;
      case 2:
          changeLocal();
          break;
      case 3:
        changeComic();
        break;
      case 4:
        changePhoto();
        break;
      case 5:
        changeEducation();
        break;
      case 6:
        changeFashion();
        break;
      case 7:
        changeSociety();
        break;
      case 8:
        changeTech();
        break;
      case 9:
        changeSpace();
        break;
      case 10:
        changeArt();
        break;
      case 11:
        changePerform();
        break;
      case 12:
        changeDesign();
        break;
      case 13:
        changeGame();
        break;
      case 14:
        changeMovie();
        break;
      case 15:
        changeMusic();
        break;
      case 16:
        changeFood();
        break;
      default:
        changeAll();
    }
  }

  if(multi){
    return (
      <div>
        <ButtonGroup
        buttons={["全部分類", "出版", "地方創生", "插畫漫畫", "攝影", "教育", "時尚", "社會", "科技", "空間", "藝術", "表演", "設計", "遊戲", "電影動畫", "音樂", "飲食"]}
        doSomethingAfterClick={ Farray }
      />
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