import classnames from 'classnames';

import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import WordCloud from '../../components/Chart/WordCloud';
import StackedBarFull from '../../components/Chart/StackedBarFull';

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
            熱門關鍵字
            <WordCloud />
          </div>
          <div className={classnames(chartBox, successRateWrapper)}>
            <div className={recentSuccessRate}>
              近期專案成功率
              <h1>74.5%</h1>
            </div>
            <div className={overYearsSuccessRate}>
              歷年專案成功率
              {/* <StackedBarFull /> */}
            </div>
          </div>
          <div className={classnames(chartBox, mid)}>
            歷年專案達成率
            <StackedBarFull />
          </div>
          <div className={classnames(chartBox, mid)}>
            歷年募得金額
            <StackedBarFull />
          </div>
          <div className={classnames(chartBox, mid)}>
            歷年各類別比例
            <StackedBarFull />
          </div>
          <div className={classnames(chartBox, mid)}>
            各類別成敗比例
            <StackedBarFull />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
