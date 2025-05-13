 const myChart = echarts.init(document.getElementById('wave-chart'));
    const option = {
    color: ['#ceeaee', '#cdd629', '#f8c9dd', '#ec1763', '#f37826'],
    tooltip: {
    trigger: 'axis',
    axisPointer: {
    type: 'cross',
    label: {
    backgroundColor: '#6a7985'
}
}
},
    legend: {
    data: ['Singapour', 'Nouvelle Zélande', 'Ethiopie', 'Bangladesh', 'Brésil']
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
    xAxis: [
{
    type: 'category',
    boundaryGap: false,
    data: ['2012', '2015', '2020', '2021', '2022', '2023', '2024']
}
    ],
    yAxis: [
{
    type: 'value'
}
    ],
    series: [
{
    name: 'Singapour',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
    width: 0
},
    showSymbol: false,
    areaStyle: {
    opacity: 0.8,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
    offset: 0,
    color: '#ceeaee'
},
{
    offset: 1,
    color: '#ceeaee'
}
    ])
},
    emphasis: {
    focus: 'series'
},
    data: [140, 232, 101, 264, 90, 340, 250]
},
{
    name: 'Nouvelle Zélande',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
    width: 0
},
    showSymbol: false,
    areaStyle: {
    opacity: 0.8,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
    offset: 0,
    color: '#cdd629'
},
{
    offset: 1,
    color: '#cdd629'
}
    ])
},
    emphasis: {
    focus: 'series'
},
    data: [120, 282, 111, 234, 220, 340, 310]
},
{
    name: 'Ethiopie',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
    width: 0
},
    showSymbol: false,
    areaStyle: {
    opacity: 0.8,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
    offset: 0,
    color: '#f8c9dd'
},
{
    offset: 1,
    color: '#f8c9dd'
}
    ])
},
    emphasis: {
    focus: 'series'
},
    data: [320, 132, 201, 334, 190, 130, 220]
},
{
    name: 'Bangladesh',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
    width: 0
},
    showSymbol: false,
    areaStyle: {
    opacity: 0.8,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
    offset: 0,
    color: '#ec1763'
},
{
    offset: 1,
    color: '#ec1763'
}
    ])
},
    emphasis: {
    focus: 'series'
},
    data: [220, 402, 231, 134, 190, 230, 120]
},
{
    name: 'Brésil',
    type: 'line',
    stack: 'Total',
    smooth: true,
    lineStyle: {
    width: 0
},
    showSymbol: false,
    label: {
    show: true,
    position: 'top'
},
    areaStyle: {
    opacity: 0.8,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
    offset: 0,
    color: '#f37826'
},
{
    offset: 1,
    color: '#f37826'
}
    ])
},
    emphasis: {
    focus: 'series'
},
    data: [220, 302, 181, 234, 210, 290, 150]
}
    ]
};
    myChart.setOption(option);