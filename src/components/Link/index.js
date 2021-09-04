import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { link, currentLink } from './index.module.css';

const LinkItem = ({ className, to, children }) => {
  return (
    <NavLink className={classnames(link, className)} activeClassName={currentLink} to={to}>
      {children}
    </NavLink>
  );
};

export default LinkItem;
