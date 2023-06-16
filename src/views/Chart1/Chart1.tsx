import React from 'react'
import './Chart1.css'
import ReactEcharts from 'echarts-for-react'

const Chart1 :React.FC = () => {

    const getOption = () => {

        let options = {
                backgroundColor: "#03213D",
                color: ["#5090FF", "#01B3E4", "#FF7E00", "#99004c"],
                tooltip: {
                trigger: "axis",
                backgroundColor: "rgba(0,0,0,.6)",
                borderColor: "rgba(147, 235, 248, .8)",
                textStyle: {
                    color: "#FFF",
                },
                },
                grid: {
                left: "2%",
                right: "5%",
                bottom: "5%",
                top: "30px",
                containLabel: true,
                },
            
                legend: {
                show: true,
                icon: "rect",
                orient: "horizontal",
                left: "right",
                itemWidth: 12,
                itemHeight: 12,
                formatter: ["{a|{name}}"].join("\n"),
                textStyle: {
                    fontSize: 12,
                    color: "#6A93B9",
                    height: 8,
                    rich: {
                        a: {
                            verticalAlign: "bottom",
                        },
                    },
                },
                data: ["一号窗口", "二号窗口", "三号窗口", "四号窗口"],
                },
                xAxis: {
                type: "category",
                axisLine: {
                    lineStyle: {
                        color: "#BDD8FB",
                        fontSize: 12,
                    },
                },
                axisLabel: {
                    // interval:0,
                    color: "#BDD8FB",
                    fontSize: 12,
                },
                axisTick: {
                    show: false,
                },
                data: [
                    "计生",
                    "劳保医保",
                    "房屋租赁",
                    "退役军人",
                ],
                },
                yAxis: {
                type: "value",
                min: 0,
                minInterval: 1,
                nameTextStyle: {
                    fontSize: 12,
                    color: "#BDD8FB",
                    align: "center",
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.15)",
                    },
                },
                splitArea: { show: false },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    fontSize: 12,
                    fontFamily: "Bebas",
                    color: "#BDD8FB",
                },
                },
                series: [
                {
                    type: "line",
                    smooth: true, // 是否曲线
                    name: "一号窗口", // 图例对应类别
                    data: [4000, 6000, 7000, 2000, 5000, 7000, 9000], // 纵坐标数据
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,  //右
                            y: 0,  //下
                            x2: 0,  //左
                            y2: 1,  //上
                            colorStops: [
                            {
                                offset: 0.1,
                                color: '#5090FF' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1057E500' // 100% 处的颜色
                            }
                            ]
                        },
                    },
                },
                {
                    type: "line",
                    smooth: true,
                    name: "二号窗口",
                    data: [1000, 4000, 5000, 6000, 3000, 8000, 7000],
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,  //右
                            y: 0,  //下
                            x2: 0,  //左
                            y2: 1,  //上
                            colorStops: [
                            {
                                offset: 0.1,
                                color: '#01B3E4' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#86DCF300' // 100% 处的颜色
                            }
                            ]
                        },
                    },
                },
                {
                    type: "line",
                    smooth: true,
                    name: "三号窗口",
                    data: [1230, 4520, 5620, 7220, 3520, 8600, 7630],
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,  //右
                            y: 0,  //下
                            x2: 0,  //左
                            y2: 1,  //上
                            colorStops: [
                            {
                                offset: 0.1,
                                color: '#FF7E00' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FF000000' // 100% 处的颜色
                            }
                            ]
                        },
                    },
                },
                {
                    type: "line",
                    smooth: true,
                    name: "四号窗口",
                    data: [230, 4520, 5520, 6620, 3620, 8620, 7620],
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,  //右
                            y: 0,  //下
                            x2: 0,  //左
                            y2: 1,  //上
                            colorStops: [
                            {
                                offset: 0.1,
                                color: '#99004c' // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FF000000' // 100% 处的颜色
                            }
                            ]
                        },
                    },
                },
                ],
        }
        return options 
    }

    return (
        <div className="chart1">
            <ReactEcharts style={{width:'800px',height:"600px"}} option={getOption()} />
        </div>
        
    )

}


export default Chart1