import s from './ChartBarExpInc.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ChartBarExpInc(data) {
const tablet = useMediaQuery('(min-width: 768px)');
const result = data.data

  const renderTopLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y-8} fill="#52555F" textAnchor="middle">{`${value} грн`}</text>
  };
  const renderRightLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={(x+60) + height * 2} y={y-8} fill="#52555F" textAnchor="start" >{`${value} грн`}</text>;
  };

  return tablet ? (
    <div className={s.CartesianGrid}
    >
      <ResponsiveContainer width="100%" height={380}>
        <BarChart data={result}
          fontSize={12}
          margin={{ top: 40}}
          // barGap={0}
          // barCategoryGap={0}
          // minPointSize={5}
        >
          <CartesianGrid
            width={635}
            vertical={false}
            horizontalPoints={[28, 68, 108, 148, 188, 228, 268, 308, 348]}
            stroke="#F5F6FB"
            strokeWidth={2}
          />
          <XAxis
            dataKey="_id.categoryLabel"
            axisLine={false}
            tickLine={false}
            stroke="#52555F"
            interval={0}
            // padding={{ left: 20, right: 20 }}
            // orientation='bottom'
            // margin={{ bottom: 30 }}

          />
          <Bar
            dataKey="total"
            maxBarSize={38}
            radius={[10, 10, 0, 0]}
            label={renderTopLabel}
          >
            {result.map((entry, index) => (
              <Cell
                fill={(index === -1) + (index % 3) ? '#FFDAC0' : '#FF751D'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={485}>
      <BarChart
        data={result}
        layout="vertical"
        fontSize={10}
        maxBarSize="100%"
      >
        <YAxis
          dataKey="_id.categoryLabel"
          axisLine={false}
          tickLine={false}
          stroke="#52555F"
          type="category"
          dx={8}
          dy={-20}
          textAnchor="start"
        />
        <Bar
          dataKey="total"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderRightLabel}
          fill="#FFDAC0"
        >
          {result.map((entry, index) => (
            <Cell
              fill={(index === -1) + (index % 3) ? '#FFDAC0' : '#FF751D'}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
