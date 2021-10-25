import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartOptions} from '../shared/create-echart-options';
import {px} from '../shared/px';
import china from '../geo/china.json'

export const Chart6 = () => {
  const divRef = useRef(null)
  const colors = {'上海市': '#BB31F7', '江苏省': '#15B8FD', '浙江省': '#06E1EE'}
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    // @ts-ignore
    echarts.registerMap('CN', china)
    myChart.setOption(createEchartOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN', // 自定义扩展图表类型
          data: [
            {name: '上海市', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['上海市'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            },
          }
        },
        {
          type: 'map',
          mapType: 'CN',
          data: [
            {name: '江苏省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['江苏省'],
            borderColor: 'yellow',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6',
            }
          }
        },
        {
          type: 'map',
          mapType: 'CN',
          data: [
            {name: '浙江省', value: 100},
          ],
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['浙江省'],
            borderColor: '#01A7F7',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#5470C6'
            }
          }
        }
      ]
    }))
  }, [])

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{background: colors['上海市']}} />申城籍
          <span className="icon" style={{background: colors['江苏省']}} />江南籍
          <span className="icon" style={{background: colors['浙江省']}} />禹杭籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  )
}