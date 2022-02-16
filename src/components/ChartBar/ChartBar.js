import s from './ChartBar.module.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { getReports } from '../../redux/reports/selectors';
import { findByLabelText } from '@testing-library/dom';

const ChartBar = (data) => {
const tablet = useMediaQuery('(min-width: 768px)');
const dataReports= useSelector(getReports);
const dataSubcategory = dataReports.detailedDescriptionStatistic;

const expense = dataSubcategory.filter((el) => (el._id.typeOfTransaction === false));
const income = dataSubcategory.filter((el) => (el._id.typeOfTransaction))

const result = (data ? expense : income)

const renderTopLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y-5} fill="#52555F" textAnchor="middle" dy={-5}>{`${value} грн`}</text>
};
const renderRightLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={(x+30) + width / 2} y={y} fill="#52555F" textAnchor="start" dy={-8}>{`${value} грн`}</text>;
};

return (
  result.length > 0 && (
    tablet ? (
      <div className={s.CartesianGrid}>
        <ResponsiveContainer width="100%" height="100%" >
        <BarChart data={result}
                fontSize={12}
                margin={{top: 20}}
                barGap={-20}
                barCategoryGap= {-20}
                // minPointSize={5}
                >
          <CartesianGrid width={635}
                  vertical={false}
                  horizontalPoints={[28, 68, 108, 148, 188, 228, 268, 308, 348]}
                  stroke= "#F5F6FB"
                  strokeWidth= {2}/>
          <XAxis dataKey="_id.description"
                axisLine={false}
                tickLine={false}
                stroke="#52555F"
                />
          <Bar dataKey="total"
                barSize={38}
                radius= {[10, 10, 0, 0]}
                label={renderTopLabel}>
            {result.map((entry, index) => (
            <Cell fill={ (index === -1) + (index % 3)  ? '#FFDAC0': '#FF751D' } key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
      </div>
  ) : (
    // <div className={s.CartesianGrid}>
      <ResponsiveContainer  width="100%" height={485}>
      <BarChart data={result}
                layout="vertical"
                fontSize={10}
                maxBarSize="100%">
          <YAxis dataKey="_id.description"
                 axisLine={false}
                 tickLine={false}
                 stroke="#52555F"
                  type="category"
                  dx={8}
                  dy={-20}
                  textAnchor="start"/>
          <Bar dataKey="total"
                barSize={15}
                radius= {[0, 10, 10, 0]}
                label={renderRightLabel}
                fill='#FFDAC0'>
              {result.map((entry, index) => (
              <Cell fill={ ((index === -1) + (index % 3))  ? '#FFDAC0': '#FF751D' } key={`cell-${index}`}/>
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      // </div>
  ))
)
}
export default ChartBar
