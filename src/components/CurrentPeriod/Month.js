import { useMonth } from '@datepicker-react/hooks';

function Month({ year, month, firstDayOfWeek }) {
  const { monthLabel } = useMonth({
    year,
    month,
  });

  return (
    <div>
      <div css={{ textAlign: 'center', margin: '0 0 16px' }}>
        <strong>{monthLabel}</strong>
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          justifyContent: 'center',
          marginBottom: '10px',
          fontSize: '10px',
        }}
      ></div>
    </div>
  );
}

export default Month;
