import Link from '../Link';
import classnames from 'classnames';
import { appPath } from '../../config/routing.config';

import { sidebar, sidebarLink, splitLine, logoWrapper, logo } from './index.module.css';

const Sidebar = ({ className, projects = [0, 1, 2, 3, 4, 5] }) => {
  return (
    <div className={classnames(sidebar, className)}>
      <div className={logoWrapper}>
        <div className={logo} />
      </div>
      <div>
        <hr className={splitLine} />
        <Link className={sidebarLink} to={appPath.overview}>
          Overview
        </Link>
        <hr className={splitLine} />
        {projects.map((p, index) => (
          <Link key={p} className={sidebarLink} to={`${appPath.editor}/${index + 1}`}>{`Project ${index + 1}`}</Link>
        ))}
        <hr className={splitLine} />
        <Link className={sidebarLink} to={appPath.overview}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
