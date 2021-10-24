import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartOptions} from '../shared/create-echart-options'


export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(()=>{
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartOptions({
      ...baseEchartOptions,
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
      },
      series: [
        {
          name: '破案排名 1',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '破案排名 2',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }));
  }, [])
  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  )
}