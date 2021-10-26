import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';

export const Chart9 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {age: 0, value: 0.19},
    {age: 18, value: 0.20},
    {age: 28, value: 0.26},
    {age: 38, value: 0.35},
    {age: 48, value: 0.26},
    {age: 58, value: 0.20},
    {age: 68, value: 0.08},
    {age: 78, value: 0.06}
  ]

  const fetchData = () => {// @ts-ignore
    return Math.random().toFixed(2) - 0
  }

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {age: 0, value: fetchData()},
        {age: 18, value: fetchData()},
        {age: 28, value: fetchData()},
        {age: 38, value: fetchData()},
        {age: 48, value: fetchData()},
        {age: 58, value: fetchData()},
        {age: 68, value: fetchData()},
        {age: 78, value: fetchData()}
      ]
      updateData(newData)
    }, 1500)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      color: '#F7A110',
      xAxis: {
        type: 'category',
        boundaryGap: false,
        // @ts-ignore
        data: data.map(i => i.age),
        splitLine: {
          show: true,
          lineStyle: {
            color: '#073E78'
          }
        },
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: '#073E78'
          }
        },
        axisLabel: {
          formatter(val){
            return val * 100 + '%'
          }
        }
      },
      series: [
        {
          type: 'line',
          //@ts-ignore
          data: data.map(i => i.value),
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {
            width: px(2)
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F7A110'
            }, {
              offset: 1,
              color: '#1B1D52'
            }])
          }
        }
      ]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    updateData(data)
  } ,[])

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart">

      </div>
    </div>
  )
}