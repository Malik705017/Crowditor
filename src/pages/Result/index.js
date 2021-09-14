import classnames from 'classnames';

import ProjectSidebar from '../../components/ProjectSidebar';
import Title from '../../components/Title';
import StackedBar from '../../components/Chart/StackedBar';
import BoxPlot from '../../components/Chart/BoxPlot';
import RankList from '../../components/RankList';
import { eachRangeSuccessRate } from '../../resources/data/StackedBar';

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
} from './index.module.css';

const ResultPage = () => {
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
                  <h1>95.6</h1>
                  /100
                </div>
              </div>
              <div className={scoreRemark}>
                <h2>您的分數超過</h2>
                <h1> 58.17% </h1>
                <h2>的專案</h2>
              </div>
            </div>
            <div className={classnames(rankInfoWrapper, columnCenter)}>
              <h2>分數介於 90 - 100 的專案中，有 97.55% 的專案都成功了</h2>
              <div className={classnames(chartBox, mid)}>
                <StackedBar data={eachRangeSuccessRate} full/>
              </div>
            </div>
            <h2>和您的文案相似的專案有 15 筆，平均成功率為 86.67%</h2>
            <h2>和您的專案類別「科技」相同的佔 20.0%</h2>
            <h2>出現最多次的類別為「設計」，佔 46.67%</h2>
            <h2>和您的專案性質「群眾集資」相同的佔 33.33%</h2>
            <h2>出現最多次的性質為「預購式專案」，佔 66.67%</h2>
            <div className={columnCenter}>
              <h1>相似專案列表</h1>
              <RankList columns={['專案名稱', '相似度']} items={[
                ['專案1', '590'],
                ['專案2', '420'],
                ['專案3', '413'],
                ['專案4', '250'],
                ['專案5', '190'],
                ['專案6', '180'],
                ['專案7', '155'],
                ['專案8', '140'],
                ['專案9', '120'],
                ['專案10', '100'],
              ]}/>
              <h1>相似專案特性分布</h1>
              <div className={chartBoxWrapper}>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>目標金額</h2>
                    80000 NTD
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>募資時長</h2>
                    31天
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>簡介字數</h2>
                    52字
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>內文字數</h2>
                    3075字
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>最高贊助方案金額</h2>
                    9999 NTD
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
                </div>
                <div className={classnames(chartBox, small)}>
                  <div className={chartTitle}>
                    <h2>最低贊助方案金額</h2>
                    150 NTD
                  </div>
                  <BoxPlot />
                  <p>9個比您數值更低，0個比您數值更高</p>
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
