import React , { useState } from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import { series1, series2 } from "../../../resources/data/WordCloud";

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
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000 //animation
};

export default function WordCloud() {
  const [graph , setGraph] = useState(<ReactWordcloud options={options} words={series1} />);

  const changedata1 = () => {
    setGraph(<ReactWordcloud options={options} words={series1} />)
  }
  const changedata2 = () => {
    setGraph(<ReactWordcloud options={options} words={series2} />)
  }

  return (
    <div>
      <button onClick={ changedata1 }>
         data1
      </button>
      <button onClick={ changedata2 }>
         data2
      </button>
      { graph }
    </div>
  );
}