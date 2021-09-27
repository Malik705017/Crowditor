import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProjectSidebar from "../../components/ProjectSidebar";
import Title from "../../components/Title";
import StackedBar from "../../components/Chart/StackedBar";
import RankList from "../../components/RankList";
import Chartbox from "../../components/Chartbox";
import WordCloud from "../../components/Chart/WordCloud";
//import { eachRangeSuccessRate } from '../../resources/data/StackedBar';

import {
  container,
  resultWrapper,
  columnCenter,
  rowCenter,
  rowBasline,
  score,
  textBox,
  chartBoxWrapper,
  large,
  mid,
  small,
  rankInfoWrapper,
  continueButton,
  listBox,
  chartBox,
  loading,
  loader,
} from './index.module.css';

const ResultPage = () => {
  const resultState = useSelector(state => state.result);
  const editorState = useSelector(state => state.editor);
  const history = useHistory();

  const handleContinue = () => {
    console.log('continue');
    history.goBack();
  };

  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={resultWrapper}>
        <Title>{editorState.form.name.value}</Title>
        {resultState.loading ? (
          <div className={loader}>
            <h3>Please wait while analyzing</h3>
            <div className={loading} />
          </div>
        ) : (
          <div className={columnCenter}>
            <div className={rowCenter}>
              <div>
                <h2>專案評分</h2>
                <div className={classnames(score, rowBasline)}>
                  <h1>{resultState.score}</h1>
                  <h3>/100</h3>
                </div>
              </div>
              <div className={textBox}>
                <div className={rowBasline}>
                  <h2>您的分數超過</h2>
                  <h1> {resultState.greater_than}% </h1>
                  <h2>的專案</h2>
                </div>
                <hr />
                <div className={rowBasline}>
                  <h2>分數介於</h2>
                  <h1>{resultState.success_rates_by_score.xaxis.categories[resultState.score_rank_index]}</h1>
                  <h2>的專案中，有</h2>
                  <h1>{resultState.success_rates_by_score.series[0].data[resultState.score_rank_index]}</h1>
                  <h2>% 的專案都成功了</h2>
                </div>
              </div>
            </div>
            <div className={classnames(rankInfoWrapper, columnCenter)}>
              <h2>各分數級距成功率</h2>
              <div className={mid}>
                <StackedBar data={resultState.success_rates_by_score} full />
              </div>
            </div>
            {resultState.peer_cnt !== 0 && (
              <>
                <div className={classnames(chartBox, large, listBox)}>
                  <RankList
                    title='相似專案列表'
                    columns={['名次', '專案名稱', '專案類別', '專案性質', '結果']}
                    items={resultState.peers.items}
                    type='peers'
                  />
                </div>
                <div className={chartBoxWrapper}>
                  <div className={classnames(chartBox, small)}>
                    <h2>標題推薦字</h2>
                    <WordCloud data={resultState.title_recommend_tokens} multi={false} />
                  </div>
                  <div className={classnames(chartBox, small)}>
                    <h2>簡介推薦字</h2>
                    <WordCloud data={resultState.content_recommend_tokens} multi={false} />
                  </div>
                  <div className={classnames(chartBox, small)}>
                    <h2>內文推薦字</h2>
                    <WordCloud data={resultState.content_recommend_tokens} multi={false} />
                  </div>
                </div>
                <h1>相似專案特性分布</h1>
                <div className={chartBoxWrapper}>
                  <Chartbox title="目標金額" unit="NTD" data={resultState.goal}/>
                  <Chartbox title="募資時長" unit="天" data={resultState.duration_days}/>
                  <Chartbox title="簡介字數" unit="字" data={resultState.description_length}/>
                  <Chartbox title="內文字數" unit="字" data={resultState.content_length}/>
                  <Chartbox title="最高贊助方案金額" unit="NTD" data={resultState.max_set_prices}/>
                  <Chartbox title="最低贊助方案金額" unit="NTD" data={resultState.min_set_prices}/>
                </div>
              </>
            )}
            <button className={continueButton} onClick={handleContinue} type='submit'>繼續編輯</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
