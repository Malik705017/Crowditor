import Link from '../Link';
import classnames from 'classnames';
import { appPath } from '../../config/routing.config';

import '../../App.css';
import './index.css';

const Sidebar = ({ className, projects = [0, 1, 2, 3, 4, 5] }) => {
  return (
    <div className={classnames('sidebar', className)}>
      <div className='logo' />
      <div className='project-list'>
        <Link className={'sidebar-link'} to={appPath.overview}>
          Overview
        </Link>
        {projects.map((p, index) => (
          <Link key={p} className={'sidebar-link'} to={`${appPath.editor}/${index + 1}`}>{`Project ${index + 1}`}</Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
