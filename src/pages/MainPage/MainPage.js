import s from './MainPage.module.css';
import Balance from '../../components/Balance/Balance';
import CountingTable from '../../components/CountingTable/CountingTable';
import Report from '../../components/Report/Report';

export default function MainPage() {
  return (
    <div className={s.container}>
      <div className={s.containerNav}>
        <Report />
        <Balance />
      </div>
      <CountingTable />
    </div>
  );
}
