// import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from './redux/auth/selectors';
import { fetchCurrentUser } from './redux/auth/thunks';
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm/AuthForm';
import Balance from './components/Balance/Balance';
import CountingTable from './components/CountingTable/CountingTable';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <AppBar />
        <AuthForm />
        <Balance showReport={true} showBtn={true} />
        <CountingTable/>
      </div>
    )
  );
}

export default App;
