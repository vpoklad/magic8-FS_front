// import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from './redux/auth/selectors';
import { fetchCurrentUser } from './redux/auth/thunks';
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm/AuthForm';
import ReportPage from './pages/ReportPage/ReportPage';
import CountingTable from './components/CountingTable/CountingTable';
import { GoogleAuthPage } from './pages/GoogleAuthPage';
import Container from './components/Container/Container';
import MainPage from './pages/MainPage/MainPage';
import Balance from './components/Balance/Balance';
import { getUser } from './redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const isLoggedIn = useSelector(getUser);

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
        <Container>
          {!isLoggedIn && <AuthForm />}
          {isLoggedIn && (
            <>
              <MainPage>
                <Balance />
                <CountingTable />
              </MainPage>
              <ReportPage />
            </>
          )}
        </Container>
      </div>
    )
  );
}

export default App;
