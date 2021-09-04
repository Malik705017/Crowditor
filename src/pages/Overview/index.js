import Title from '../../components/Title';
import Sidebar from '../../components/Sidebar';

import { container } from './index.module.css';

const Overview = () => {
  return (
    <div className={container}>
      <Title>Overview</Title>
      <Sidebar />
    </div>
  );
};

export default Overview;
