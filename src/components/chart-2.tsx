import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options'


export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    {name: '静安区公安局', 2020: 2, 2021: 3},
    {name: '徐汇区公安局', 2020: 2, 2021: 3},
    {name: '浦东新区公安局', 2020: 2, 2021: 3},
    {name: '黄埔区公安局', 2020: 2, 2021: 3},
    {name: '普陀区公安局', 2020: 2, 2021: 3},
    {name: '闵行区公安局', 2020: 2, 2021: 3},
    {name: '松江区公安局', 2020: 2, 2021: 3},
    {name: '嘉定区公安局', 2020: 2, 2021: 3},
    {name: '虹口区公安局', 2020: 2, 2021: 3},
  ]
  useEffect(()=>{
    setInterval(()=> {
      const newData = [
        {name: '静安区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '徐汇区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '浦东新区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '黄埔区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '普陀区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '闵行区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '松江区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '嘉定区公安局', 2020: 2, 2021: Math.random() * 10},
        {name: '虹口区公安局', 2020: 2, 2021: Math.random() * 10},
      ]
      updateData(newData)
    }, 1000)
  }, [])

  const updateData = (data) => {
    myChart.current.setOption(createEchartOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false}
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val){
            return val.replace('公安局', '\n公安局')
          }
        }
      },
      series: [
        {
          name: '2020年',
          type: 'bar',
          data: data.map(i => i[2020]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034F9'
              },{
                offset: 1,
                color: '#04A1FF'
              }])
            }
          }
        },
        {
          name: '2021年',
          type: 'bar',
          data: data.map(i => i[2021]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#B92AE8'
              }, {
                offset: 1,
                color: '#6773E7'
              }])
            }
          }
        }
      ]
    }));
  }

  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    updateData(data)
  }, [])

  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <span className="first" />2020
        <span className="second" />2021
      </div>
    </div>
  )
}