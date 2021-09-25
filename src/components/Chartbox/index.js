import classnames from "classnames";

import BoxPlot from "../Chart/BoxPlot";
import {
    chartBox,
    small,
    plotFrame,
    chartTitle,
} from "./index.module.css";

const Chartbox = ({title, unit, data}) => {
    return (
        <div className={classnames(chartBox, small)}>
            <div className={chartTitle}>
                <h2>{title}</h2>
                {data.project_value} {unit}
            </div>
            <div className={plotFrame}>
                <BoxPlot data={data} />
            </div>
            <p>與您相似的成功專案中</p>
            <p>
                {data.success_less}個比您數值更低，
                {data.success_greater}個比您數值更高
            </p>
        </div>
    )
}

export default Chartbox;