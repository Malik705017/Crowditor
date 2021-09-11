import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';

import { container, overviewWrapper } from './index.module.css';

//components can be added after layout completion
//import WordCloud from '../../components/WordCloud';
//import StackedBarFull from '../../components/StackedBarFull';
//import BoxPlot from '../../components/BoxPlot';
//import Bar from '../../components/Bar';
//import Line from '../../components/Line';
//import StackedBar from '../../components/StackedBar';
//import StackedColumnFull from '../../components/StackedColumnFull';

const Overview = () => {
  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={overviewWrapper}>
        <Title>Overview</Title>
      </div>
    </div>
  );
};

export default Overview;
