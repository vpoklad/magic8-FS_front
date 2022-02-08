// import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from './redux/auth/selectors';
import { fetchCurrentUser } from './redux/auth/thunks';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
// import AuthForm from './components/AuthForm/AuthForm';
// import Balance from './components/Balance/Balance';

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
        <Container />
      </div>
    )
  );
}

export default App;
