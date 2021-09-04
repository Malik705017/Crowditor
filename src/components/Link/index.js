import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './index.css';

const LinkItem = ({ className, to, children }) => {
  return (
    <NavLink className={classnames('link', className)} activeClassName={'currentLink'} to={to}>
      {children}
    </NavLink>
  );
};

export default LinkItem;
