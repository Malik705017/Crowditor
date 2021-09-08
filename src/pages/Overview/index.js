import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';
import ChartBox from '../../components/ChartBox';

import { container, overviewWrapper, chartBoxWrapper } from './index.module.css';

const Overview = () => {
  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={overviewWrapper}>
        <Title>Overview</Title>
        <div className={chartBoxWrapper}>
          <ChartBox size='large' chartTitle='熱門關鍵字' type='WordCloud' />
          <ChartBox size='mid' chartTitle='近期專案成功率' />
          <ChartBox size='mid' chartTitle='歷年專案成功率' />
          <ChartBox size='mid' chartTitle='歷年專案達成率' />
          <ChartBox size='mid' chartTitle='歷年募得金額' />
          <ChartBox size='mid' chartTitle='歷年各類別比例' type='StackedBarFull' />
          <ChartBox size='mid' chartTitle='各類別成敗比例' />
        </div>
      </div>
    </div>
  );
};

export default Overview;
