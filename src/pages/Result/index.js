import classnames from "classnames";

import { useSelector } from "react-redux";

import ProjectSidebar from "../../components/ProjectSidebar";
import Title from "../../components/Title";
import StackedBar from "../../components/Chart/StackedBar";
import BoxPlot from "../../components/Chart/BoxPlot";
import RankList from "../../components/RankList";
//import { eachRangeSuccessRate } from '../../resources/data/StackedBar';

import {
  container,
  resultWrapper,
  columnCenter,
  contentWrapper,
  scoreWrapper,
  scoreBox,
  score,
  scoreRemark,
  chartBoxWrapper,
  chartBox,
  mid,
  small,
  chartTitle,
  rankInfoWrapper,
  continueButton
} from "./index.module.css";

const ResultPage = () => {
  const resultState = useSelector(state => state.result);

  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={resultWrapper}>
        <Title>Result</Title>
        <div className={columnCenter}>
          <div className={contentWrapper}>
            <div className={scoreWrapper}>
              <div className={scoreBox}>
                <h2>專案評分</h2>
                <div className={score}>
                  <h1>{resultState.score}</h1>
                  /100
                </div>
              </div>
              <div className={scoreRemark}>
                <h2>您的分數超過</h2>
                <h1> {resultState.greater_than}% </h1>
                <h2>的專案</h2>
              </div>
            </div>
            <div className={classnames(rankInfoWrapper, columnCenter)}>
              <h2>
                分數介於{" "}
                {
                  resultState.success_rates_by_score.xaxis.categories[
                    resultState.score_rank_index
                  ]
                }{" "}
                的專案中，有{" "}
                {
                  resultState.success_rates_by_score.series[0].data[
                    resultState.score_rank_index
                  ]
                }
                % 的專案都成功了
              </h2>
              <div className={classnames(chartBox, mid)}>
                <StackedBar data={resultState.success_rates_by_score} full />
              </div>
            </div>
            <h2>
              和您的文案相似的專案有 {resultState.peer_cnt} 筆，成功率為{" "}
              {(
                (resultState.peer_success_cnt / resultState.peer_cnt) *
                100
              ).toFixed(2)}
              %
            </h2>
            <h2>
              和您的專案類別「科技」相同的佔{" "}
              {(resultState.categories.domain.same_rate * 100).toFixed(2)}%
            </h2>
            <h2>
              出現最多次的類別為「{resultState.categories.domain.most.name}
              」，佔{" "}
              {(resultState.categories.domain.most.rate * 100).toFixed(2)}%
            </h2>
            <h2>
              和您的專案性質「群眾集資」相同的佔{" "}
              {(resultState.categories.type.same_rate * 100).toFixed(2)}%
            </h2>
            <h2>
              出現最多次的性質為「{resultState.categories.type.most.name}」，佔{" "}
              {(resultState.categories.type.most.rate * 100).toFixed(2)}%
            </h2>
            <div className={columnCenter}>
              <h1>相似專案列表</h1>
              <RankList
                title='相似專案列表'
                columns={["名次", "專案名稱", "相似度"]}
                items={resultState.peers.items}
              />
              <h1>相似專案特性分布</h1>
              <div className={chartBoxWrapper}>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>目標金額</h2>
                    {resultState.goal.project_value} NTD
                  </div>
                  <BoxPlot data={resultState.goal} />
                  <p>
                    {resultState.goal.success_less}個比您數值更低，
                    {resultState.goal.success_greater}個比您數值更高
                  </p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>募資時長</h2>
                    {resultState.duration_days.project_value}天
                  </div>
                  <BoxPlot data={resultState.duration_days} />
                  <p>
                    {resultState.duration_days.success_less}個比您數值更低，
                    {resultState.duration_days.success_greater}個比您數值更高
                  </p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>簡介字數</h2>
                    {resultState.description_length.project_value}字
                  </div>
                  <BoxPlot data={resultState.description_length} />
                  <p>
                    {resultState.description_length.success_less}
                    個比您數值更低，
                    {resultState.description_length.success_greater}
                    個比您數值更高
                  </p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>內文字數</h2>
                    {resultState.content_length.project_value}字
                  </div>
                  <BoxPlot data={resultState.content_length} />
                  <p>
                    {resultState.content_length.success_less}個比您數值更低，
                    {resultState.content_length.success_greater}個比您數值更高
                  </p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>最高贊助方案金額</h2>
                    {resultState.max_set_prices.project_value} NTD
                  </div>
                  <BoxPlot data={resultState.max_set_prices} />
                  <p>
                    {resultState.max_set_prices.success_less}個比您數值更低，
                    {resultState.max_set_prices.success_greater}個比您數值更高
                  </p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>最低贊助方案金額</h2>
                    {resultState.min_set_prices.project_value} NTD
                  </div>
                  <BoxPlot data={resultState.min_set_prices} />
                  <p>
                    {resultState.min_set_prices.success_less}個比您數值更低，
                    {resultState.min_set_prices.success_greater}個比您數值更高
                  </p>
                </div>
              </div>
              <button className={continueButton}>繼續編輯</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
