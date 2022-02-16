import { useMonth } from '@datepicker-react/hooks';

function Month({ year, month }) {
  const monthes = [
    'СІЧЕНЬ',
    'ЛЮТИЙ',
    'БЕРЕЗЕНЬ',
    'КВІТЕНЬ',
    'ТРАВЕНЬ',
    'ЧЕРВЕНЬ',
    'ЛИПЕНЬ',
    'СЕРПЕНЬ',
    'ВЕРЕСЕНЬ',
    'ЖОВТЕНЬ',
    'ЛИСТОПАД',
    'ГРУДЕНЬ',
  ];

  return (
    <div>
      <strong>
        {monthes[month]} {year}
      </strong>
    </div>
  );
}

export default Month;
