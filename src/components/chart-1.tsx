import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'
import {createEchartOptions} from '../shared/create-echart-options'

export const Chart1 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {name: '静安区公安局', number: 10},
    {name: '徐汇区公安局', number: 20},
    {name: '浦东新区公安局', number: 36},
    {name: '黄埔区公安局', number: 41},
    {name: '普陀区公安局', number: 15},
    {name: '闵行区公安局', number: 26},
    {name: '松江区公安局', number: 37},
    {name: '嘉定区公安局', number: 18},
    {name: '虹口区公安局', number: 29},
  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name: '静安区区', dataNumber: Math.random() * 100},
        {name: '徐汇区', dataNumber: Math.random() * 100},
        {name: '浦东区', dataNumber: Math.random() * 100},
        {name: '黄埔区', dataNumber: Math.random() * 100},
        {name: '普陀区', dataNumber: Math.random() * 100},
        {name: '闵行区', dataNumber: Math.random() * 100},
        {name: '松江区', dataNumber: Math.random() * 100},
        {name: '嘉定区', dataNumber: Math.random() * 100},
        {name: '虹口区', dataNumber: Math.random() * 100},
      ]
      updateData(newData)
    }, 1500)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      xAxis: {
        data: data.map(i => i.name),
        axisTick: {show: false},
        axisLabel: {
          formatter(val) {
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
        }
      },
      series: [
        {
          type: 'bar',
          data: data.map(i => i.dataNumber)
        }
      ]
    }));
  }

  useEffect(()=>{
    myChart.current = echarts.init(divRef.current);
    updateData(data)
  }, [])

  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}