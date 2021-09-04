import Link from '../../components/Link';
import { appPath } from '../../config/routing.config';

import './index.css';

const LandingPage = () => {
  return (
    <div className='landing'>
      <h1 className='welcome'>Welcome To Crowditor !</h1>
      <Link to={appPath.overview}>
        <button className='startButton'>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
