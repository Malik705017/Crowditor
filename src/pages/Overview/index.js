import classnames from 'classnames';

import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import WordCloud from '../../components/Chart/WordCloud';
import StackedBarFull from '../../components/Chart/StackedBarFull';
import StackedColumnFull from '../../components/Chart/StackedColumnFull';
import Line from '../../components/Chart/Line';
import Bar from '../../components/Chart/Bar';

import {
  container,
  overviewWrapper,
  chartBoxWrapper,
  chartBox,
  mid,
  large,
  successRateWrapper,
  recentSuccessRate,
  overYearsSuccessRate
} from './index.module.css';

const Overview = () => {
  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={overviewWrapper}>
        <Title>Overview</Title>
        <div className={chartBoxWrapper}>
          <div className={classnames(chartBox, large)}>
            <h2>熱門關鍵字</h2>
            <WordCloud />
          </div>
          <div className={classnames(chartBox, successRateWrapper)}>
            <div className={recentSuccessRate}>
              <h2>近期專案成功率</h2>
              <h1>74.5%</h1>
            </div>
            <div className={overYearsSuccessRate}>
              <h2>歷年專案成功率</h2>
              <Line />
            </div>
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>歷年專案達成率中位數</h2>
            <Line />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>歷年募得金額中位數</h2>
            <Line />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>各類別專案數</h2>
            <Bar />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>各類別成敗比例</h2>
            <StackedBarFull />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>歷年各類別比例</h2>
            <StackedColumnFull />
          </div>
          <div className={classnames(chartBox, large)}>
            <h2>成功專案常見字</h2>
            強調售後服務、釐清常見問題有助於成功達標
            <WordCloud />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
