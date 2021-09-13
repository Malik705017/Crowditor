import ProjectSidebar from '../../components/ProjectSidebar';
import Title from '../../components/Title';

import { container, resultWrapper } from './index.module.css';

const ResultPage = () => {
  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={resultWrapper}>
        <Title>Result</Title>
      </div>
    </div>
  );
};

export default ResultPage;
