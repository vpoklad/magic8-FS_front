// import './App.css';
import AppBar from './components/AppBar/AppBar';
import AuthForm from './components/AuthForm/AuthForm';
import Balance from './components/Balance/Balance';

function App() {
  return (
    <div className="App">
      <AppBar />
      <AuthForm />
      <Balance showReport={false} />
    </div>
  );
}

export default App;
