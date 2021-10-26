import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={2}>入室盗窃</td>
          <td>翻窗入室</td>
          <td>50</td>
          <td rowSpan={2}>110</td>
        </tr>
        <tr>
          <td>技术开锁</td>
          <td>60</td>
        </tr>
        <tr>
          <td rowSpan={2}>抢夺</td>
          <td>飞车抢夺</td>
          <td>22</td>
          <td rowSpan={2}>44</td>
        </tr>
        <tr>
          <td>徒手抢夺</td>
          <td>22</td>
        </tr>
        <tr>
          <td rowSpan={2}>扒窃</td>
          <td>公交车扒窃</td>
          <td>40</td>
          <td rowSpan={2}>85</td>
        </tr>
        <tr>
          <td>街面扒窃</td>
          <td>45</td>
        </tr>
        <tr>
          <td rowSpan={3}>诈骗</td>
          <td>甩票子诈骗</td>
          <td>32</td>
          <td rowSpan={3}>232</td>
        </tr>
        <tr>
          <td>买手机诈骗</td>
          <td>80</td>
        </tr>
        <tr>
          <td>网络诈骗</td>
          <td>120</td>
        </tr>
      </tbody>
    </table>
  )
}