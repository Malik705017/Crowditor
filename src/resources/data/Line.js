export const series = [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}];

export const successRate = {
    series: [{
        name: '成功率(%)',
        data: [70.4, 73.7, 53.2, 74.6, 67.2, 66.5, 68.2, 74.3, 78.6, 79.3],
    }],
    xaxis: {
        categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        // title: {text: '年分'}
    },
    yaxis: {
        // title: {
        //     text: '成功率'
        // },
        min: 0,
        max: 100
    },
}

export const achievementRate = {
    series: [{
        name: '達成率',
        data: [1.17, 1.19, 1.00, 1.50, 1.23, 1.25, 1.28, 1.55, 2.32, 2.22],
    }],
    xaxis: {
        categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        // title: {text: '年分'}
    },
    yaxis: {
        // title: {
        //     text: '達成率中位數'
        // },
        min: 0,
        max: 2.5
    },
}

export const fundingAmount = {
    series: [{
        name: '募得金額(NTD)',
        data: [27050, 45198, 28020, 270078, 130690, 175435, 174422, 203705, 230292, 201000],
    }],
    xaxis: {
        categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        // title: {text: '年分'}
    },
    yaxis: {
        // title: {
        //     text: '募得金額中位數'
        // },
        min: 0,
        max: 300000
    },
}
