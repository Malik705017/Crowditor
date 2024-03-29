//import { apiEndpoint } from "../config/api.config";
import { resultActions, initialResultState } from "../store/result";

// import response_estimation from "../mock_response/response_estimation.json";
import { colors } from "../resources/data/Color";

const createBoxPlotData = (inputData, title) => {
  return {
    series: [
      {
        name: "相似專案分布",
        type: "boxPlot",
        data: [
          {
            x: title,
            y: [
              inputData.box_min,
              inputData.box_25,
              inputData.box_50,
              inputData.box_75,
              inputData.box_max
            ]
          }
        ],
        color: colors.color1
      },
      {
        name: "專案自己",
        type: "scatter",
        data: [
          {
            x: title,
            y: inputData.project_value
          }
        ],
        color: colors.color4
      },
      {
        name: "相似失敗專案中位數",
        type: "scatter",
        data: [
          {
            x: title,
            y: inputData.failure_median
          }
        ],
        color: colors.color2
      },
      {
        name: "相似成功專案中位數",
        type: "scatter",
        data: [
          {
            x: title,
            y: inputData.success_median
          }
        ],
        color: colors.color5
      }
    ],
    xaxis: {
      type: "category",
      categories: [title]
    },
    success_greater: inputData.success_greater,
    success_less: inputData.success_less,
    project_value: inputData.project_value
  };
};

const emptyBoxPlotData = {
  series: [
      {
          name: 'box',
          type: 'boxPlot',
          data: [{
              x: '',
              y: []
          }]
      }
  ],
  xaxis: {
      type: 'category',
      categories: [''],
  },
  success_greater: 0,
  success_less: 0,
  project_value: 0,
};

export const startLoading = () => dispatch => {
  dispatch(resultActions.startLoading());
}

export const getResultData = estimation => async dispatch => {
  try {
    const parseData = estimation;

    const resultData = {
      loading: false,
      score: (parseData.score * 100).toFixed(1),
      score_rank_index: Math.floor(parseData.score * 10),
      greater_than: (parseData.greater_than * 100).toFixed(2),
      success_rates_by_score: {
        series: parseData.success_rates_by_score.items.map(item => ({
          name: item.name,
          data: item.data.map(num => (num * 100).toFixed(2))
        })),
        xaxis: {
          categories: parseData.success_rates_by_score.labels
        }
      },
      peer_cnt: parseData.peer_cnt,
      peer_success_cnt: parseData.peer_success_cnt,
      categories: parseData.categories,
      peers: {
        items: parseData.peers.map((item,i) => ({...item, rank: i+1}))
      },
      goal: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.goal,
          "目標金額"
        ),
      duration_days: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.duration_days,
          "募資時長"
        ),
      description_length: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.description_length,
          "簡介字數"
        ),
      content_length: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.content_length,
          "內文字數"
        ),
      max_set_prices: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.max_set_prices,
          "最高贊助方案金額"
        ),
      min_set_prices: parseData.peer_cnt===0 ? emptyBoxPlotData : 
        createBoxPlotData(
          parseData.metadata.min_set_prices,
          "最低贊助方案金額"
        ),
      title_recommend_tokens: {
        all: parseData.peer_cnt===0 ? [] : 
          parseData.recommend_tokens.title.map((item) => (
            {
              "text": item.token,
              "value": Math.log(item.pvals),
            }
          ))
      },
      content_recommend_tokens: {
        all: parseData.peer_cnt===0 ? [] : 
          parseData.recommend_tokens.content.map((item) => (
            {
              "text": item.token,
              "value": Math.log(item.pvals),
            }
          ))
      }
    };
    dispatch(resultActions.loadResult(resultData));
  } catch (error) {
    dispatch(resultActions.loadResult(initialResultState));
  }
};
