// import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from './redux/auth/selectors';
import { fetchCurrentUser } from './redux/auth/thunks';
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm/AuthForm';
import Balance from './components/Balance/Balance';
import ReportPage from './pages/ReportPage/ReportPage';
import CountingTable from './components/CountingTable/CountingTable';
import { GoogleAuthPage } from './pages/GoogleAuthPage';

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
        <Routes>
          <Route path="/google" element={<GoogleAuthPage />} />
        </Routes>
        <AuthForm />
        <Balance showReport={true} showBtn={true} />
        <ReportPage />
        <CountingTable />
      </div>
    )
  );
}

export default App;
