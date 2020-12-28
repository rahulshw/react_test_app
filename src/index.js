import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
const createReactClass = require('create-react-class');
const {LineChart, BarChart, Bar, Line, ReferenceLine, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip} = require('recharts');

const daywiseACRRevenueAttributed = [
    {
      "attributed_revenue_in_usd": 25389.71,
      "date": "2020-12-24 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 70408.41000000006,
      "date": "2020-12-23 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 109160.53999999995,
      "date": "2020-12-22 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 80006.73000000007,
      "date": "2020-12-21 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 94130.74000000014,
      "date": "2020-12-20 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 98623.5700000001,
      "date": "2020-12-19 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 126622.97999999995,
      "date": "2020-12-18 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 106148.11999999988,
      "date": "2020-12-17 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 115287.22999999988,
      "date": "2020-12-16 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 109472.46000000006,
      "date": "2020-12-15 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 119321.82999999997,
      "date": "2020-12-14 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 102749.0600000002,
      "date": "2020-12-13 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 101429.93000000015,
      "date": "2020-12-12 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 118212.39999999983,
      "date": "2020-12-11 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 109130.21999999994,
      "date": "2020-12-10 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 78966.32000000005,
      "date": "2020-12-09 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 70021.56000000006,
      "date": "2020-12-08 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 65543.44000000002,
      "date": "2020-12-07 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 57392.66000000005,
      "date": "2020-12-06 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 53418.82000000003,
      "date": "2020-12-05 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 149737.50999999986,
      "date": "2020-12-04 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 181327.32000000047,
      "date": "2020-12-03 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 210140.3300000006,
      "date": "2020-12-02 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 611376.1599999979,
      "date": "2020-12-01 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 498315.7199999985,
      "date": "2020-11-30 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 340086.9000000002,
      "date": "2020-11-29 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 673730.3599999959,
      "date": "2020-11-28 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 623906.9499999955,
      "date": "2020-11-27 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 277137.5000000006,
      "date": "2020-11-26 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 235752.2900000009,
      "date": "2020-11-25 00:00:00+00"
    },
    {
      "attributed_revenue_in_usd": 83819.24999999997,
      "date": "2020-11-24 00:00:00+00"
    }
]

const daywiseActivityOnACRData = {
    "2020-11-28 00:00:00+00": "Updated ACR first notification timeout from 10 Sec to 30 Sec.",
    "2020-12-05 00:00:00+00": "Updated ACR first notification timeout from 30 Sec to 60 Sec.",
    "2020-12-15 00:00:00+00": "Updated ACR second notification timeout from 40 Sec to 300 Sec."
}

const CustomTooltip  = createReactClass({
    propTypes: {
      type: PropTypes.string,
      payload: PropTypes.array,
      label: PropTypes.string,
    },
    getIntroOfPage: function(label) {
      if (label in daywiseActivityOnACRData) {
          return daywiseActivityOnACRData[label]
      }
    },
    render: function() {
      const { active } = this.props;
      if (active) {
        const { payload, label } = this.props;
        let content = this.getIntroOfPage(label);
        if (!content) {
            content = 'This is default content';
        }
        return (
          <div className="custom-tooltip">
            <p className="label">{`${label} : ${payload[0].value}`}</p>
            <p className="desc">{content}</p>
          </div>
        );
      }
      return null;
    }
});
  


  
const renderLineChart = (
    <LineChart width={1200} height={800} data={daywiseACRRevenueAttributed} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip content={<CustomTooltip/>}/>
          <Line type='monotone' dataKey='attributed_revenue_in_usd' stroke='#82ca9d' fill='#82ca9d' />
          {/* <ReferenceLine x="2020-11-30 00:00:00+00" stroke="red"/> */}
          <Brush />
    </LineChart>
);


/*
<LineChart width={600} height={300} data={data1}>
      <Line type="monotone" dataKey="val" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
*/
const element = <h1> Hello World !! </h1>;
console.log(renderLineChart);
ReactDOM.render(renderLineChart, document.getElementById('root'));
