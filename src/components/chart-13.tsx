import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';

export const Chart13 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {name: '南京路', value: 0.08},
    {name: '白玉路', value: 0.06},
    {name: '崇明路', value: 0.11},
    {name: '南京路', value: 0.09},
    {name: '白渡桥', value: 0.12},
    {name: '复兴中路', value: 0.06},
    {name: '广兰路', value: 0.08},
    {name: '枫桥路', value: 0.08},
    {name: '虹桥路', value: 0.08}
  ]

  const fetchData = () => {// @ts-ignore
    return (Math.random() * 0.1).toFixed(2) - 0
  }

  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '南京路', value: fetchData()},
        {name: '白玉路', value: fetchData()},
        {name: '崇明路', value: fetchData()},
        {name: '南京路', value: fetchData()},
        {name: '白渡桥', value: fetchData()},
        {name: '复兴中路', value: fetchData()},
        {name: '广兰路', value: fetchData()},
        {name: '枫桥路', value: fetchData()},
        {name: '虹桥路', value: fetchData()}
      ]
      updateData(newData)
    }, 2000)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(val){
            if(val.length > 2){
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val
            }
          }
        }
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          formatter(value){
            return (value * 100).toFixed(0) + '%'
          }
        }
      },
      series: [
        {
          type: 'bar',
          data: data.map(i => i.value),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0A97FB'
          }, {
            offset: 1,
            color: '#1E34FA'
          }])
        }
      ]
    }))
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    updateData(data)
  } ,[])

  return (
    <div ref={divRef} className="chart">

    </div>
  )
}