import React from "react"
import ReactEcharts from "echarts-for-react"

const Charts: React.FC = () => {
    
    const getOption = () => {
        const defaultColors = ['#00B67C', '#029BE8', '#ECFB00']
        let option = {
        color: defaultColors,
        title: {
            show: false
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            x: '5%',
            y: '15%',
            x2: '5%',
            y2: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'Alibaba PuHuiTi',
                    fontWeight: 400,
                    color: '#82DAF7',
                    padding: [5, 0, 0, 0]
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#294462',
                    opacity: 0.3
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月']
        },
        yAxis: {
            type: 'value',
            minInterval: 5,
            name: '',
            nameTextStyle: {
                fontSize: 18,
                fontFamily: 'CenturyGothic',
                color: '#ffffff',
                padding: [0, 0, 0, 30]
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#06304C'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    fontFamily: 'CenturyGothic',
                    fontWeight: 'normal',
                    color: '#82DAF7',
                    padding: [0, 5, 0, 0]
                }
            }
        },
        dataZoom: [
            {
                // x轴没有具体的数值
                type: 'inside', // 图形内部的滚动条
                xAxisIndex: [0], // 明确指定滚动的轴
                minValueSpan: 1, // x轴最小的index
                maxValueSpan: 3, // x轴最大的index
                zoomOnMouseWheel: false // 关闭鼠标滚轮缩放
            }
        ],
        series: [{
            type: 'bar',
            barWidth: 12,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(15, 151, 207, .1)'
            },
            barGap: '80%',
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                    offset: 1,
                    color: '#209CFF'
                    }, {
                    offset: 0,
                    color: '#68E0CF'
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            data: [87, 96, 124, 200, 432]
        }]
        }
        return option
    }

    return (

        <div className="charts">
            <h3>hello</h3>
            <ReactEcharts style={{width:'700px',height:'500px'}} option={getOption()} />
        </div>
    )

}


export default Charts