import s from './ChartBarExpInc.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ChartBarExpInc({ chartData }) {
  const tablet = useMediaQuery('(min-width: 768px)');
  const result = chartData;
  const resultForMobile = chartData.map(el => ({
    total: el.total,
    _id: el._id.description,
  }));
  const len = result.length;

  const renderTopLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 8}
        fill="#52555F"
        textAnchor="middle"
      >{`${value} грн`}</text>
    );
  };
  const renderRightLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + 60 + height * 2}
        y={y - 8}
        fill="#52555F"
        textAnchor="start"
      >{`${value} грн`}</text>
    );
  };
  console.log('result :>> ', result);
  return (
    result?.length > 0 &&
    (tablet ? (
      <div className={s.CartesianGrid}>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart
            data={result}
            fontSize={12}
            margin={{ top: 40 }}
            barGap={0}
            barCategoryGap={0}
            minPointSize={5}
          >
            <CartesianGrid
              width={635}
              vertical={false}
              horizontalPoints={[28, 68, 108, 148, 188, 228, 268, 308, 348]}
              stroke="#F5F6FB"
              strokeWidth={2}
            />
            <XAxis
              dataKey="_id.description"
              axisLine={false}
              tickLine={false}
              stroke="#52555F"
              interval={0}
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
      <ResponsiveContainer min-width={320} height={50 * len}>
        {/* // <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          data={result}
          layout="vertical"
          fontSize={10}
          maxBarSize="100%"
          // barGap={20}
          // barCategoryGap={10}
          // minPointSize={5}
          margin={{
            top: 5,
            right: 3,
            left: 2,
            bottom: 5,
          }}
        >
          <XAxis
            axisLine={false}
            tickLine={false}
            // tick={false}
            scale="linear"
            // reversed={true}
          />

          <YAxis
            dataKey="_id.description"
            axisLine={false}
            tickLine={false}
            stroke="#52555F"
            // interval={0}
            type="category"
            dx={8}
            dy={-20}
            textAnchor="start"
            // scale="linear"
            // reversed={true}
            // interval="preserveStart"
          />
          <Tooltip />
          <Bar
            dataKey="total"
            data={result}
            barSize={15}
            radius={[0, 10, 10, 0]}
            label={renderRightLabel}
            fill="#FFDAC0"
            interval={0}
            minPointSize={result[len - 1].total}
            // minPointSize={result[0].total}
            // minPointSize={result[0].total}
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
    ))
  );
}
