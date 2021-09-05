import Link from '../Link';
import classnames from 'classnames';
import { appPath } from '../../config/routing.config';

import { logo } from '../../App.module.css';
import { sidebar, sidebarLink } from './index.module.css';

const Sidebar = ({ className, projects = [0, 1, 2, 3, 4, 5] }) => {
  return (
    <div className={classnames(sidebar, className)}>
      <div className={logo} />
      <div>
        <Link className={sidebarLink} to={appPath.overview}>
          Overview
        </Link>
        {projects.map((p, index) => (
          <Link key={p} className={sidebarLink} to={`${appPath.editor}/${index + 1}`}>{`Project ${index + 1}`}</Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
