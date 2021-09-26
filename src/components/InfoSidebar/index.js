import Title from '../Title';
import { sidebar, title, subTitle, info, words, word } from './index.module.css';

const InfoSidebar = ({ data: { success_rate, goal, description_length, content_length, keywords }, category }) => {
  return (
    <div className={sidebar}>
      <Title className={title}>{category}</Title>
      <div className={info}>
        <p className={subTitle}>
          專案成功率: <span>{(success_rate * 100).toFixed(1)}%</span>
        </p>
        <p className={subTitle}>
          平均目標金額: <span>{goal}元</span>
        </p>
        <p className={subTitle}>
          平均敘述長度: <span>{description_length}字</span>
        </p>
        <p className={subTitle}>
          平均內文長度: <span>{content_length}字</span>
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
