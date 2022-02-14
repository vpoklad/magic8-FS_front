import s from './ChartBar.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from 'recharts';
import React, { PureComponent, useCallback, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';

// const data= [
//   { value: 'pork', label: 'Свинина', price: '5000'},
//   { value: 'beef', label: 'Яловичина', price: '4500'},
//   { value: 'chicken', label: "Курка", price: '3200'},
//   { value: 'fish', label: 'Риба', price: '2100'},
//   { value: 'panini', label: 'Паніні', price: '1800'},
//   { value: 'coffee', label: 'Кава', price: '1700'},
//   { value: 'spaghetti', label: "Спагетті", price: '1500'},
//   { value: 'chocolate', label: "Шоколад", price: '800'},
//   { value: 'olives', label: 'Маслини', price: '500'},
//   { value: 'verdure', label: 'Зелень', price: '300'},
// ]

const ChartBar = () => {
const tablet = useMediaQuery('(min-width: 768px)');
const [activeIndex, setActiveIndex] = useState(0);
const dataReports = useSelector(getReports);
const data = dataReports.detailedDescriptionStatistic

const handleClick = (data, index) => {
  setActiveIndex(index)
}

const renderTopLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y-10} fill="#52555F" textAnchor="middle" dy={-5}>{`${value} грн`}</text>
};
const renderRightLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={(x-15) + width} y={y} fill="#52555F" textAnchor="start" dy={-5}>{`${value} грн`}</text>;
};

return (
tablet ? (
    <div className={s.CartesianGrid}>
      <ResponsiveContainer width={635} height="100%" >
      <BarChart data={data} fontSize={12}
                // barSize={600}
                // barGap={10}
                barCategoryGap={1}
                minPointSize={10}
                // margin={{ top: 0,  left: auto }}
                // width={655}
                // height={383}
      >
        <CartesianGrid
              width={635}
              vertical={false}
              horizontalPoints={[28, 68, 108, 148, 188, 228, 268, 308, 348]}
              stroke= "#F5F6FB"
              strokeWidth= {2}
        />
        <XAxis dataKey="description"
              axisLine={false}
              tickLine={false}
              stroke="#52555F"
              interval="0"
        />

        <Bar dataKey="total"
              barSize={38}
              interval="0"
              radius= {[10, 10, 0, 0]}
              label={renderTopLabel}
              onClick={handleClick}
              // fill='#FFDAC0'
        >
           {data.map((entry, index) => (
           <Cell cursor="pointer" fill={index === activeIndex ? '#FF751D' : '#FFDAC0'} key={`cell-${index}`} />
          ))}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
     </div>
 ) : (
    <ResponsiveContainer  width="100%" height={485}>
    <BarChart data={data}
              layout="vertical"
              fontSize={10}
              // height={485}
              // barGap={0}
              // barCategoryGap={0}
          >
      <YAxis dataKey="description"
            axisLine={false}
            tickLine={false}
            stroke="#52555F"
            type="category"
            mirror ={true}
            interval="0"
            // padding={{ top: 0 }}
            // ticks={[10, 12, 14, 16, 18]}
            // domain={[80, 20]}
      />
      <Bar dataKey="total"
          barSize={15}
          radius= {[0, 10, 10, 0]}
          label={renderRightLabel}
          onClick={handleClick}
          // fill='#FFDAC0'
          // interval="0"
      >
        {data.map((entry, index) => (
        <Cell cursor="pointer" fill={index === activeIndex ? '#FF751D' : '#FFDAC0'} key={`cell-${index}`} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
)
)
}
export default ChartBar
