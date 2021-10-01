import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import Link from '../Link';
import { appPath } from '../../config/routing.config';
import { editorActions } from '../../store/editor';
import add from '../../resources/images/add.png';

import { logo } from '../../App.module.css';
import { sidebar, sidebarLink, splitLine, addIcon, project, projectList } from './index.module.css';

const Sidebar = ({ className }) => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.editor.formList);

  const addProjectHandler = () => {
    dispatch(editorActions.addForm());
  };

  return (
    <div className={classnames(sidebar, className)}>
      <div className={logo} />
      <div>
        <hr className={splitLine} />
        <Link className={sidebarLink} to={appPath.overview}>
          Overview
        </Link>
        <hr className={splitLine} />
        <div className={project}>
          <p>Project</p>
          <img className={addIcon} src={add} alt={'add icon'} onClick={addProjectHandler} />
        </div>
        <div className={projectList}>
          {projects.map((project, index) => (
            <Link
              key={`${project.name}_${index}`}
              className={sidebarLink}
              to={`${appPath.editor}/${index + 1}`}
            >{`Project ${index + 1}`}</Link>
          ))}
        </div>
        <hr className={splitLine} />
        <Link className={sidebarLink} to={appPath.overview}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
