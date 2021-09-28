import Title from '../Title';
import { splitLine, sidebar, title, subTitle, info, words, word } from './index.module.css';

const InfoSidebar = ({ data: { success_rate, goal, duration_days, description_length, content_length, keywords }, category }) => {
  return (
    <div className={sidebar}>
      <Title className={title}>{category}</Title>
      <div className={info}>
        <hr className={splitLine} />
        <p className={subTitle}>
          專案成功率: <span>{(success_rate * 100).toFixed(1)}%</span>
        </p>
        <p className={subTitle}>
          目標金額中位數: <span>{goal.toLocaleString()}元</span>
        </p>
        <p className={subTitle}>
          募資時長中位數: <span>{duration_days.toLocaleString()}天</span>
        </p>
        <p className={subTitle}>
          簡介長度中位數: <span>{description_length.toLocaleString()}字</span>
        </p>
        <p className={subTitle}>
          內文長度中位數: <span>{content_length.toLocaleString()}字</span>
        </p>
        <p className={subTitle}>熱門關鍵字</p>
        <div className={words}>
          {keywords.map(keyword => (
            <div className={word} key={keyword.token}>
              {keyword.token}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSidebar;
