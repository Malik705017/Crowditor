import Title from '../Title';
import { sidebar, title, subTitle, info } from './index.module.css';

const InfoSidebar = ({ data: { category, successRate, goal, avgDescribeLen, avgContentLen } }) => {
  return (
    <div className={sidebar}>
      <Title className={title}>{category}</Title>
      <div className={info}>
        <p className={subTitle}>
          專案成功率: <span>{successRate}%</span>
        </p>
        <p className={subTitle}>
          平均目標金額: <span>{goal}元</span>
        </p>
        <p className={subTitle}>
          平均敘述長度: <span>{avgDescribeLen}字</span>
        </p>
        <p className={subTitle}>
          平均內文長度: <span>{avgContentLen}字</span>
        </p>
        <p className={subTitle}>熱門關鍵字</p>
      </div>
    </div>
  );
};

export default InfoSidebar;
