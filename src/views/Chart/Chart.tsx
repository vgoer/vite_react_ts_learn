import React from "react"
import ReactEcharts from "echarts-for-react"
import echarts from "echarts";

const Charts: React.FC = () => {
    
    const getOption = () => {

        let option = {
            xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
            type: 'value'
            },
            series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
            ]
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