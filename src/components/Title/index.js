import classNames from 'classnames';
import styles from './index.module.css';

const Title = ({ children }) => <h1 className={classNames(styles.title)}>{children}</h1>;

export default Title;
