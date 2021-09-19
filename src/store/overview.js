import { createSlice } from '@reduxjs/toolkit';

export const initialOverviewState = {
  keywords : {
    all : [],
    出版 : [],
    地方創生 : [],
    插畫漫畫 : [],
    攝影 : [],
    教育 : [],
    時尚 : [],
    社會 : [],
    科技 : [],
    空間 : [],
    藝術 : [],
    表演 : [],
    設計 : [],
    遊戲 : [],
    電影動畫 : [],
    音樂 : [],
    飲食 : [],
  },
  success_rate_6_mon : 0,
  success_rate : {
    series: [{
        name: '成功率(%)',
        data: [],
    }],
    xaxis: {
        categories: [],
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
        data: [],
    }],
    xaxis: {
        categories: [],
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
        data: [],
    }],
    xaxis: {
        categories: [],
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
      data: []
    }],
    xaxis: {
      categories: [],
    }
  },
  domain_cnt : {
    series: [
    ],
    xaxis: {
        categories: [],
        // title: {text: '年分'}
    },
  },
  domain_success_rate : {
    series: [
    ],
    xaxis: {
        categories: [],
        // title: {text: '年分'}
    },
  },
  helpful_tokens : {
    all : [],
  },
  funds_ranking : {
      items : [],
  },
  achievement_rate_ranking : {
      items : [],
  }
};

const loadOverview = (state, action) => ({
  ...state = action.payload
});

const overviewSlice = createSlice({
  name: 'overview',
  initialState: initialOverviewState,
  reducers: {
    loadOverview
  },
});

export const overviewActions = overviewSlice.actions; // action
export default overviewSlice.reducer; // reducer