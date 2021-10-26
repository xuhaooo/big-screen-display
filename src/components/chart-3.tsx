import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px'

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null)
  const data = [
    {year: 2013, '抢劫': 0.09, '醉驾': 0.10, '盗窃': 0.11, '故意杀人': 0.12, '故意伤人': 0.13},
    {year: 2014, '抢劫': 0.08, '醉驾': 0.09, '盗窃': 0.10, '故意杀人': 0.11, '故意伤人': 0.12},
    {year: 2015, '抢劫': 0.07, '醉驾': 0.08, '盗窃': 0.09, '故意杀人': 0.10, '故意伤人': 0.11},
    {year: 2016, '抢劫': 0.06, '醉驾': 0.07, '盗窃': 0.08, '故意杀人': 0.09, '故意伤人': 0.10},
    {year: 2017, '抢劫': 0.05, '醉驾': 0.06, '盗窃': 0.07, '故意杀人': 0.08, '故意伤人': 0.09},
    {year: 2018, '抢劫': 0.04, '醉驾': 0.05, '盗窃': 0.06, '故意杀人': 0.07, '故意伤人': 0.08},
    {year: 2019, '抢劫': 0.03, '醉驾': 0.04, '盗窃': 0.05, '故意杀人': 0.06, '故意伤人': 0.07},
    {year: 2020, '抢劫': 0.02, '醉驾': 0.03, '盗窃': 0.04, '故意杀人': 0.05, '故意伤人': 0.06},
    {year: 2021, '抢劫': 0.01, '醉驾': 0.02, '盗窃': 0.03, '故意杀人': 0.04, '故意伤人': 0.05}
  ]
  const fetchData = () => {// @ts-ignore
    return (Math.random() * 0.1).toFixed(2) - 0
  }
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {year: 2013, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2014, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2015, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2016, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2017, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2018, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2019, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2020, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()},
        {year: 2021, '抢劫': fetchData(), '醉驾': fetchData(), '盗窃': fetchData(), '故意杀人': fetchData(), '故意伤人': fetchData()}
      ]
      updateData(newData)
    }, 2000)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map(i => i.year),
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false}
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%'
          }
        }
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: data.map(i => i['抢劫'])
        },
        {
          name: '醉驾',
          type: 'line',
          data: data.map(i => i['醉驾'])
        },
        {
          name: '盗窃',
          type: 'line',
          data: data.map(i => i['盗窃'])
        },
        {
          name: '故意杀人',
          type: 'line',
          data: data.map(i => i['故意杀人'])
        },
        {
          name: '故意伤人',
          type: 'line',
          data: data.map(i => i['故意伤人'])
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    updateData(data)
  }, [])

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  )
}
