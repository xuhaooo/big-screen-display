import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';

export const Chart12 = () => {
  const divRef = useRef(null)
  const data = [
    {value: 0.08, name: '南京路'},
    {value: 0.06, name: '白玉路'},
    {value: 0.11, name: '崇明路'},
    {value: 0.09, name: '南京路'},
    {value: 0.12, name: '白渡桥'},
    {value: 0.06, name: '复兴中路'},
    {value: 0.08, name: '广兰路'},
    {value: 0.08, name: '枫桥路'},
    {value: 0.08, name: '虹桥路'},
  ]
  useEffect(() => {
    let myChart = echarts.init(divRef.current)
    myChart.setOption(createEchartOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          // @ts-ignore
          const value = (data.find(i => i.name === name)?.value * 100).toFixed(0) + '%'
          return name + '' + value
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }))
  }, [])

  return (
    <div className="chart12">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
    </div>
  )
}