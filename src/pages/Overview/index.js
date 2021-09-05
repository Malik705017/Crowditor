import Title from '../../components/Title';
import ProjectSidebar from '../../components/ProjectSidebar';

import { container, overviewWrapper } from './index.module.css';

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
