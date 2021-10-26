import React from 'react';

export const Chart5 = () => {
  return (
    <div className="战果">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>破案数</th>
            <th>抓获嫌疑人</th>
            <th>并串案件</th>
            <th>现勘录入</th>
            <th>视侦录入</th>
            <th>合成案件数</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019</td>
            <td>10</td>
            <td>8</td>
            <td>12</td>
            <td>5</td>
            <td>29</td>
            <td>3</td>
            <td>67</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>34</td>
            <td>2</td>
            <td>21</td>
            <td>17</td>
            <td>14</td>
            <td>8</td>
            <td>96</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>22</td>
            <td>30</td>
            <td>14</td>
            <td>5</td>
            <td>18</td>
            <td>4</td>
            <td>93</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}