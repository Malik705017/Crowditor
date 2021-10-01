import Link from '../../components/Link';
import { appPath } from '../../config/routing.config';

import { landing, logo, startButton, welcome } from './index.module.css';

const LandingPage = () => {
  return (
    <div className={landing}>
      <div className={logo}></div>
      <h1 className={welcome}>Nurture your crowdfunding venture!</h1>
      <Link to={appPath.overview}>
        <button className={startButton}>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
