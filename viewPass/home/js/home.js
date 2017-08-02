//人员的模块颜色
var peopleStyle = {
        //通常情况下：
        normal: {　　　　　　　　　　　　
            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: 'rgb(98,108,145)'
        },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
    //车辆的模块颜色
var carStyle = {
    normal: {　　　　　　　　　　　　
        color: 'rgb(107,230,193)'
    },
    //鼠标悬停时：
    emphasis: {
        shadowBlur: 5,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
    //物品的模块颜色
var goodStyle = {
        //通常情况下：
        normal: {　　　　　　　　　　　　
            color: 'rgb(63,177,227)'
        },
        //鼠标悬停时：
        emphasis: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }




//年统计
myChartPie = echarts.init(document.getElementById('mainPie'));

var option = {
    title: {
        text: '年统计分析'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['本期','同期','同比','上期','环比']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data:['本期','同期','同比','上期','环比']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'合计',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, -0.2, 134, 90, 230, 210]
        },
        {
            name:'保护犯罪现场',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, -1.2, 234, 290, 330, 310]
        },
        {
            name:'搜查',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[150, 232, -2.1, 154, 190, 330, 410]
        },
        {
            name:'提审',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, -3, 334, 390, 330, 320]
        },
        {
            name:'传唤',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, -3, 934, 1290, 1330, 1320]
        }
    ]
};

// 为echarts对象加载数据 
myChartPie.setOption(option);

// 履职分类统计
myChartWorkOption = echarts.init(document.getElementById('workOption'));
var workOptionData = {
    title: {
        text: '履职分类统计',
        subtext: '',
        sublink: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['合计次数','审批中','审核通过','审核未通过','派警中','执行完成']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        },
        {
            name: '统计',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[2900, 1200, 300, 200, 900, 300]
        }
    ]
};
// 为echarts对象加载数据 
myChartWorkOption.setOption(workOptionData);

//月份统计
myChartDay = echarts.init(document.getElementById('dayOptionData'));

var dayOptionData = {
 title: {
        text: '月统计分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:[]
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
        data: ['本期','同期','同比','上期','环比']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'保护犯罪现场',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'搜查',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'提审',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'传唤',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'拘传',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'看管犯罪嫌疑人',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'看管被告人',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'协助执行强制措施',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name:'参与执行死刑场监督',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

// 为echarts对象加载数据 
myChartDay.setOption(dayOptionData);

