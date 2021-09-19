import { apiEndpoint } from '../config/api.config';
import { overviewActions, initialOverviewState } from '../store/overview';

export const getOverviewData = () => async dispatch => {
  try {
    const response = await fetch(`${apiEndpoint.overview}`);
    const parseData = await response.json();

    if (!response.ok) throw new Error('failed to get data from server');

    const overviewData = {
        keywords : {
            all : parseData.keywords.all,
            出版 : parseData.keywords.出版,
            地方創生 : parseData.keywords.地方創生,
            插畫漫畫 : parseData.keywords.插畫漫畫,
            攝影 : parseData.keywords.攝影,
            教育 : parseData.keywords.教育,
            時尚 : parseData.keywords.時尚,
            社會 : parseData.keywords.社會,
            科技 : parseData.keywords.科技,
            空間 : parseData.keywords.空間,
            藝術 : parseData.keywords.藝術,
            表演 : parseData.keywords.表演,
            設計 : parseData.keywords.設計,
            遊戲 : parseData.keywords.遊戲,
            電影動畫 : parseData.keywords.電影動畫,
            音樂 : parseData.keywords.音樂,
            飲食 : parseData.keywords.飲食,
        },
        success_rate_6_mon : (parseData.success_rate_6_mon * 100).toFixed(2) + '%',
        success_rate : {
          series: [{
              name: '成功率(%)',
              data: parseData.success_rate.items.map(x => Math.round(x * 10000) / 100),
          }],
          xaxis: {
              categories: parseData.success_rate.labels,
              // title: {text: '年分'}
          },
          yaxis: {
              // title: {
              //     text: '成功率'
              // },
              min: 0,
              max: 100
          },
        },
        achievement_rate : {
          series: [{
              name: '達成率',
              data: parseData.achievement_rate.items.map(x => Math.round(x * 100) / 100),
          }],
          xaxis: {
              categories: parseData.achievement_rate.labels,
              // title: {text: '年分'}
          },
          yaxis: {
              // title: {
              //     text: '達成率中位數'
              // },
              min: 0,
              max: 2.5
          },
        },
        funds : {
          series: [{
              name: '募得金額(NTD)',
              data: parseData.funds.items,
          }],
          xaxis: {
              categories: parseData.funds.labels,
              // title: {text: '年分'}
          },
          yaxis: {
              // title: {
              //     text: '募得金額中位數'
              // },
              min: 0,
              max: 300000
          },
        },
        
        eachYearCounts : {
          series: [{
            name: '專案數',
            data: parseData.domain_cnt.items.map(x => x.data).reduce((a, b) => a.map((c, i) => c + b[i]))
          }],
          xaxis: {
            categories: parseData.domain_cnt.labels,
          }
        },
        domain_cnt : {
          series: parseData.domain_cnt.items.sort((a, b) => parseFloat(b.data.at(-1)) - parseFloat(a.data.at(-1))),
          xaxis: {
              categories: parseData.domain_cnt.labels,
              // title: {text: '年分'}
          },
        },
        domain_success_rate : {
          series: parseData.domain_success_rate.items.sort((a, b) => parseFloat(b.data.at(-1)) - parseFloat(a.data.at(-1))),
          xaxis: {
              categories: parseData.domain_success_rate.labels,
              // title: {text: '年分'}
          },
        },
        helpful_tokens : {
            all : parseData.helpful_tokens,
        },
        funds_ranking : {
            items : parseData.funds_ranking.map(x => [x.rank, x.title, x.present_value]),
        },
        achievement_rate_ranking : {
            items : parseData.achievement_rate_ranking.map(x => [x.rank, x.title, Math.round(x.percentage * 100) / 100]),
        }
    };
    dispatch(overviewActions.loadOverview(overviewData));
  } catch (error) {
    dispatch(overviewActions.loadOverview(initialOverviewState));
  }
};