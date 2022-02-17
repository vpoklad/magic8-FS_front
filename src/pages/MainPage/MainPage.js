import s from './MainPage.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Balance from '../../components/Balance/Balance';
import CountingTable from '../../components/CountingTable/CountingTable';
import Report from '../../components/Report/Report';
import DatePicker from '../../components/DatePicker/DatePicker';

export default function MainPage() {
  const mobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className={s.container}>
      <div className={s.containerNav}>
        <Report />
        <Balance />
        {mobile && <DatePicker />}
      </div>
      <CountingTable />
    </div>
  );
}
