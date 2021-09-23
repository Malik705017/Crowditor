import classnames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getOverviewData } from "../../api/overview.api";

import Title from "../../components/Title";
import ProjectSidebar from "../../components/ProjectSidebar";
import WordCloud from "../../components/Chart/WordCloud";
import StackedBar from "../../components/Chart/StackedBar";
import Line from "../../components/Chart/Line";
import Bar from "../../components/Chart/Bar";
import RankList from "../../components/RankList";

import {
  container,
  overviewWrapper,
  chartBoxWrapper,
  chartBox,
  small,
  mid,
  large,
  successRateWrapper,
  recentSuccessRate,
  overYearsSuccessRate
} from "./index.module.css";

const Overview = () => {
  const dispatch = useDispatch();
  const overviewState = useSelector(state => state.overview);

  useEffect(() => {
    dispatch(getOverviewData());
  }, [dispatch]);

  return (
    <div className={container}>
      <ProjectSidebar />
      <div className={overviewWrapper}>
        <Title>Overview</Title>
        <div className={chartBoxWrapper}>
          <div className={classnames(chartBox, large)}>
            <h2>熱門關鍵字</h2>
            <WordCloud data={overviewState.keywords} multi={true} />
          </div>
          <div className={classnames(chartBox, successRateWrapper)}>
            <div className={recentSuccessRate}>
              <h2>近期專案成功率</h2>
              <h1>{overviewState.success_rate_6_mon}</h1>
            </div>
            <div className={overYearsSuccessRate}>
              <h2>歷年專案成功率</h2>
              <Line data={overviewState.success_rate} />
            </div>
          </div>
          <div className={classnames(chartBox, small)}>
            <h2>歷年專案達成率中位數</h2>
            <Line data={overviewState.achievement_rate} />
          </div>
          <div className={classnames(chartBox, small)}>
            <h2>歷年募得金額中位數</h2>
            <Line data={overviewState.funds} />
          </div>
          <div className={classnames(chartBox, small)}>
            <h2>歷年專案數</h2>
            <Bar data={overviewState.eachYearCounts} />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>歷年各類別比例</h2>
            <StackedBar data={overviewState.domain_cnt} full />
          </div>
          <div className={classnames(chartBox, mid)}>
            <h2>各類別成敗比例</h2>
            <StackedBar
              data={overviewState.domain_success_rate}
              full
              horizontal
            />
          </div>
          <div className={classnames(chartBox, large)}>
            <h2>成功專案常見字</h2>
            強調售後服務、釐清常見問題有助於成功達標
            <WordCloud data={overviewState.helpful_tokens} multi={false} />
          </div>
          <div className={classnames(successRateWrapper)}>
            <div className={classnames(chartBox, mid)}>
              <h2>贊助金額排行</h2>
              <RankList
                title='贊助金額排行'
                columns={["名次", "專案名稱", "專案金額(千元)"]}
                items={overviewState.funds_ranking.items}
                type='funds'
              />
            </div>
            <div className={classnames(chartBox, mid)}>
              <h2>達成率排行</h2>
              <RankList
                title='達成率排行'
                columns={["名次", "專案名稱", "達成率(%)"]}
                items={overviewState.achievement_rate_ranking.items}
                type='achievement'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
