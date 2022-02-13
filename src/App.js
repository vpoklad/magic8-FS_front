import './App.css';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getToken, getIsFetchingCurrentUser } from './redux/auth/selectors';
import { fetchCurrentUser } from './redux/auth/thunks';
import AppBar from './components/AppBar/AppBar';
// import AuthForm from './components/AuthForm/AuthForm';
// import ReportPage from './pages/ReportPage/ReportPage';
import CountingTable from './components/CountingTable/CountingTable';
import { GoogleAuthPage } from './pages/GoogleAuthPage';
import Container from './components/Container/Container';
import GreetingPage from './pages/GreetingPage/GreetingPage';
// import MainPage from './pages/MainPage/MainPage';
import Balance from './components/Balance/Balance';

import PrivateRoute from './routes/Private';
import PublicRoute from './routes/Public';

const AuthForm = lazy(() =>
  import('./components/AuthForm/AuthForm' /* webpackChunkName: "AuthForm" */),
);
// const GoogleAuthPage = lazy(() =>
//   import('./pages/GoogleAuthPage' /* webpackChunkName: "GoogleAuthPage" */),
// );
const MainPage = lazy(() =>
  import('./pages/MainPage/MainPage' /* webpackChunkName: "MainPage" */),
);
const ReportPage = lazy(() =>
  import('./pages/ReportPage/ReportPage' /* webpackChunkName: "ReportPage" */),
);
const NotFound = lazy(() =>
  import('./pages/NotFound/NotFound' /* webpackChunkName: "NotFound" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const token = useSelector(getToken);

  useEffect(() => {
    if (token) dispatch(fetchCurrentUser());
  });

  return (
    !isFetchingCurrentUser && (
      <div className="App">
        <AppBar />
        <main>
          <Container>
            <Suspense fallback={'Loading...'}>
              <Routes>
                <Route
                  path="/login"
                  element={
                    <PublicRoute restricted>
                      <AuthForm />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/google"
                  element={
                    <PublicRoute restricted>
                      <GoogleAuthPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/greeting"
                  element={
                    <PublicRoute restricted>
                      <GreetingPage />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/"
                  element={
                    <PrivateRoute restricted redirectTo="/login">
                      <MainPage>
                        <Balance />
                        <CountingTable />
                      </MainPage>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <PrivateRoute restricted redirectTo="/login">
                      <ReportPage />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Container>
        </main>

        {/*
        <Routes>
        <Route path="/google" element={<GoogleAuthPage />} />
        </Routes>
        <Container>
          {!token && <AuthForm />}
          {token && (
            <>
              <MainPage>
                <Balance />
                <CountingTable />
              </MainPage>
              <ReportPage />
            </>
          )}
        </Container> */}
      </div>
    )
  );
}

export default App;
