import Sidebar from '../../components/Sidebar';

import './index.css';
import '../../App.css';

const Overview = () => {
  return (
    <div className='overview-container'>
      <h1 className='subtitle absolute'>Overview</h1>
      <Sidebar className='absolute' />
    </div>
  );
};

export default Overview;
