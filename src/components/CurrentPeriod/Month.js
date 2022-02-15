import { useMonth } from '@datepicker-react/hooks';

function Month({ year, month }) {
  const { monthLabel } = useMonth({
    year,
    month,
  });

  return (
    <div>
      <strong>{monthLabel}</strong>
    </div>
  );
}

export default Month;
