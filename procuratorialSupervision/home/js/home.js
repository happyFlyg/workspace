// 问题处理统计分析
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mainBar'));
// 指定图表的配置项和数据
var optionBar = {
    title: {
        text: '问题处理统计分析',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: ['未处理', '已处理']
    },
    xAxis: {
        data: ["2017-8-1", "2017-8-8", "2017-8-15", "2017-8-22", "2017-8-29"]
    },
    yAxis: {},
    series: [{
        name: '未处理',
        type: 'bar',
        data: [11, 64, 36, 5, 43]
    }, {
        name: '已处理',
        type: 'bar',
        data: [15, 20, 45, 10, 10]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(optionBar);
//问题统计分析
myChartDay = echarts.init(document.getElementById('dayOptionData'));

var dayOptionData = {
    title: {
        text: '问题统计分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017-8-5', '2017-8-6', '2017-8-9']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '问题数量',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '问题提醒',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};

// 为echarts对象加载数据 
myChartDay.setOption(dayOptionData);