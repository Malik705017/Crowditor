import classNames from 'classnames';

const Title = ({ children, className }) => <h1 className={classNames(className)}>{children}</h1>;

export default Title;
