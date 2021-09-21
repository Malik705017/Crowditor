//import { apiEndpoint } from '../config/api.config';
import { resultActions, initialResultState } from '../store/result';

import response_estimation from '../mock_response/response_estimation.json'

const createBoxPlotData = (inputData, title) => {
    return ({
        series: [
            {
                name: '相似專案分布',
                type: 'boxPlot',
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
                    },
                ]
            },
            {
                name: '專案自己',
                type: 'scatter',
                data: [
                    {
                        x: title,
                        y: inputData.project_value
                    },
                ],
                color: '#8B00FF'
            },
            {
                name: '相似失敗專案中位數',
                type: 'scatter',
                data: [
                    {
                        x: title,
                        y: inputData.failure_median
                    },
                ],
                color: '#FF0000'
            },
            {
                name: '相似成功專案中位數',
                type: 'scatter',
                data: [
                    {
                        x: title,
                        y: inputData.success_median
                    },
                ],
                color: '#0000FF'
            }
        ],
        xaxis: {
            type: 'category',
            categories: [title],
        },
        success_greater: inputData.success_greater,
        success_less: inputData.success_less,
        project_value: inputData.project_value,
    });
}

export const getResultData = () => async dispatch => {
  try {
    // const response = await fetch(`${apiEndpoint.result}`);
    // const parseData = await response.json();

    // if (!response.ok) throw new Error('failed to get data from server');

    const parseData = response_estimation;

    const resultData = {
        score : (parseData.score * 100).toFixed(1),
        score_rank_index : Math.floor(parseData.score * 10),
        greater_than : (parseData.greater_than * 100).toFixed(2),
        success_rates_by_score : {
            series: parseData.success_rates_by_score.items.map((item) => ({
                name: item.name,
                data: item.data.map((num) => ((num*100).toFixed(2))),
            })),
            xaxis: {
                categories: parseData.success_rates_by_score.labels,
            },
        },
        peer_cnt : parseData.peer_cnt,
        peer_success_cnt : parseData.peer_success_cnt,
        categories : parseData.categories,
        peers : {
            items : parseData.peers.map((item, i) => ([i+1, item.title, item.cos.toFixed(2)]))
        },
        goal: createBoxPlotData(parseData.metadata.goal, '目標金額'),
        duration_days: createBoxPlotData(parseData.metadata.duration_days, '募資時長'),
        description_length: createBoxPlotData(parseData.metadata.description_length, '簡介字數'),
        content_length: createBoxPlotData(parseData.metadata.content_length, '內文字數'),
        max_set_prices: createBoxPlotData(parseData.metadata.max_set_prices, '最高贊助方案金額'),
        min_set_prices: createBoxPlotData(parseData.metadata.min_set_prices, '最低贊助方案金額'),
    };
    dispatch(resultActions.loadResult(resultData));
  } catch (error) {
    dispatch(resultActions.loadResult(initialResultState));
  }
};