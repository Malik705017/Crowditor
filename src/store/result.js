import { createSlice } from '@reduxjs/toolkit';

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

export const initialResultState = {
    score: 0,
    score_rank_index: 0,
    greater_than: 0,
    success_rates_by_score: {
        series: [{
            data: [],
            name: ''
        }],
        xaxis: {
            categories: [],
        },
    },
    peer_cnt: 0,
    peer_success_cnt: 0,
    categories: {
        domain: {
            most: {
              name: "",
              rate: 0
            },
            same_rate: 0
          },
          type: {
            most: {
              name: "",
              rate: 0
            },
            same_rate: 0
          }
    },
    peers: {
        items : [],
    },
    goal: emptyBoxPlotData,
    duration_days: emptyBoxPlotData,
    description_length: emptyBoxPlotData,
    content_length: emptyBoxPlotData,
    max_set_prices: emptyBoxPlotData,
    min_set_prices: emptyBoxPlotData,
};

const loadResult = (state, action) => ({
  ...state = action.payload
});

const resultSlice = createSlice({
  name: 'overview',
  initialState: initialResultState,
  reducers: {
    loadResult
  },
});

export const resultActions = resultSlice.actions; // action
export default resultSlice.reducer; // reducer