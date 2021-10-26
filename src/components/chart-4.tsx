import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {time: 0, value: 0.15},
    {time: 2, value: 0.13},
    {time: 4, value: 0.11},
    {time: 6, value: 0.13},
    {time: 8, value: 0.14},
    {time: 10, value: 0.15},
    {time: 12, value: 0.16},
    {time: 14, value: 0.18},
    {time: 16, value: 0.21},
    {time: 18, value: 0.19},
    {time: 20, value: 0.17},
    {time: 22, value: 0.16},
    {time: 24, value: 0.15}
  ]

  const fetchData = () => {// @ts-ignore
    return Math.random().toFixed(2) - 0
  }

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {time: 0, value: fetchData()},
        {time: 2, value: fetchData()},
        {time: 4, value: fetchData()},
        {time: 6, value: fetchData()},
        {time: 8, value: fetchData()},
        {time: 10, value: fetchData()},
        {time: 12, value: fetchData()},
        {time: 14, value: fetchData()},
        {time: 16, value: fetchData()},
        {time: 18, value: fetchData()},
        {time: 20, value: fetchData()},
        {time: 22, value: fetchData()},
        {time: 24, value: fetchData()}
      ]
      updateData(newData)
    }, 1500)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        //@ts-ignore
        data: data.map(i => i.time),
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
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
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          }
        }]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    updateData(data)
  }, [])

  return (
    <div className="bordered 案发时段">
      <h2>案发时段</h2>
      <div ref={divRef} className="chart"/>
    </div>
  )
}